const axios = require('axios');
const constants = require('../constants/constants');
const jose = require('node-jose');
const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const serviceAccountId = process.env.SERVICE_ACCOUNT_ID;
const keyId = process.env.KEY_ID;
const now = Math.floor(new Date().getTime() / 1000);

const mysql = require('mysql2/promise');

class WordsService {
  constructor() {
    this.pool = mysql.createPool(constants.sqlConfig);
    this.IAM_TOKEN = null;
  }

  async runQuery(sqlQuery, values) {
    try {
      const connection = await this.pool.getConnection();
      const [results] = await connection.query(sqlQuery, values);
      connection.release();
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async initializeIAMToken() {
    try {
      const payload = {
        aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
        iss: serviceAccountId,
        iat: now,
        exp: now + 3600,
      };

      const key = await jose.JWK.asKey(private_key, 'pem', { kid: keyId, alg: 'PS256' });
      const jwt_token = await jose.JWS.createSign({ format: 'compact' }, key)
        .update(JSON.stringify(payload))
        .final();

      const body = {
        jwt: jwt_token,
      };

      const response = await axios.post('https://iam.api.cloud.yandex.net/iam/v1/tokens', body);
      this.IAM_TOKEN = response.data.iamToken;
    } catch (error) {
      console.log('AXIOS ERROR_jwt:', error.response);
    }
  }

  async getWordsStartPage() {
    console.log('get all from words _ getWordsStartPage');

    const tableName = 'maariv';
    const sqlQuery = `SELECT * from ${tableName}`;

    try {
      const results = await this.runQuery(sqlQuery);
      console.log(results);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async getWord(table, id) {
    const tableName = table;
    const sqlQuery = `SELECT * from ${tableName} WHERE id = ?`;

    try {
      const results = await this.runQuery(sqlQuery, [id]);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async getWords(table) {
    
    console.log('table1111', table.url)
    console.log('table.url', table.url)
    
    
    const tableName = table.url.slice(1);
    // const tableName = table;
    const sqlQuery = `SELECT * from ${tableName}`;

    try {
      const results = await this.runQuery(sqlQuery);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async createWord(table, data) {
    const tableName = table;
    const sqlQuery = `INSERT INTO ${tableName} SET ?`;

    try {
      let word = { ...data };

      if (data.translate === '' && data.original !== '') {
        const texts = [data.original];
        const body = {
          sourceLanguageCode: process.env.source_language,
          targetLanguageCode: process.env.target_language,
          texts: texts,
          folderId: process.env.folder_id,
        };

        const headers = {
          headers: { Authorization: `Bearer ${this.IAM_TOKEN}` },
        };

        const response = await axios.post(
          'https://translate.api.cloud.yandex.net/translate/v2/translate',
          body,
          headers,
        );
        const translate = response.data.translations[0].text;
        word = {
          ...word,
          translate: translate,
        };
      }

      const results = await this.runQuery(sqlQuery, word);
      console.log('New word posted after translate', word);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async updateWord(table, data) {
    const { id, original, translate, description, periodStart, periodEnd } = data;
    const tableName = table;
    const sqlQuery = `UPDATE ${tableName} SET original = ?, translate = ?, description = ?, periodStart = ?, periodEnd = ? WHERE id = ?`;

    try {
      const results = await this.runQuery(sqlQuery, [
        original,
        translate,
        description,
        periodStart,
        periodEnd,
        id,
      ]);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async deleteWord(table, id) {
    const tableName = table;
    const sqlQuery = `DELETE from ${tableName} WHERE id = ?`;

    try {
      const results = await this.runQuery(sqlQuery, [id]);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async deleteTable(table) {
    const tableName = table;
    const sqlQuery = `DELETE from ${tableName} WHERE id > 0`;

    try {
      const results = await this.runQuery(sqlQuery);
      return results;
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }
}

module.exports = new WordsService();
