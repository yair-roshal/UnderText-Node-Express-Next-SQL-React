const mysql = require('mysql')
const axios = require('axios')
const constants = require('../constants/constants')
// const pagesPrayers = require('../../constants/clientConstants')
const pool = mysql.createPool(constants.sqlConfig)
const jose = require('node-jose')
const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
const serviceAccountId = process.env.SERVICE_ACCOUNT_ID
const keyId = process.env.KEY_ID
const now = Math.floor(new Date().getTime() / 1000)

const payload = {
    aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
    iss: serviceAccountId,
    iat: now,
    exp: now + 3600,
}

let IAM_TOKEN

jose.JWK.asKey(private_key, 'pem', { kid: keyId, alg: 'PS256' }).then(function (result) {
    jose.JWS.createSign({ format: 'compact' }, result)
        .update(JSON.stringify(payload))
        .final()
        .then(function (result) {
            const jwt_token = result

            const body = {
                //  includes only one of the fields `yandexPassportOauthToken`, `jwt`
                // "yandexPassportOauthToken": process.env.OAUTH_TOKEN,
                jwt: jwt_token,
                // end of the list of possible fields
            }

            axios
                .post('https://iam.api.cloud.yandex.net/iam/v1/tokens', body)
                .then((response) => {
                    // console.log('response.data', response.data)
                    IAM_TOKEN = response.data.iamToken
                })
                .catch((error) => {
                    console.log('AXIOS ERROR_jwt: ', error.response)
                })
        })
})

function poolConnection(req, res, resolve, reject, sqlQuery, params) {
    return pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query(sqlQuery, params, (err, rows) => {
            connection.release()

            // if (!err) {
            //     res.send(rows)
            // } else {
            //     console.log(err)
            // }
            if (!err) {
                // res.send(rows)
                resolve(rows)
            } else {
                console.log(err)
                return reject(err)
            }
        })
    })
}

class WordsService {
    //  Get all for start page ==============================================
    getWordsStartPage(req, res) {
        return new Promise((resolve, reject) => {
            console.log('get all from words _ getWordsStartPage')
            const tableName = 'words'
            const sqlQuery = `SELECT * from ${tableName}`

            poolConnection(req, res, resolve, reject, sqlQuery)
        })
    }

    // Get a word by table and by ID ==============================================
    getWord(req, res) {
        return new Promise((resolve, reject) => {
            const tableName = req.params.table
            const sqlQuery = `SELECT * from ${tableName} WHERE id = ?`

            console.log('req.params_getWord :>> ', req.params)
            console.log('sqlQuery :>> ', sqlQuery)

            poolConnection(req, res, resolve, reject, sqlQuery, [req.params.id])
        })
    }

    //  Get all words by table ==============================================
    getWords(req, res) {
        return new Promise((resolve, reject) => {
            const tableName = req.params.table
            const sqlQuery = `SELECT * from ${tableName}`

            console.log('----------------')

            console.log('req.params_getWords', req.params)
            console.log('get all from  : ' + tableName)
            console.log('req.params111 :>> ', req.params)
            console.log('sqlQuery :>> ', sqlQuery)

            // pagesPrayers = [
            //     // { name: 'Shaharit', href: '/shaharit', prayer: true },
            //     { name: 'Minha', href: '/minha', prayer: true },
            //     { name: 'Maariv', href: '/maariv', prayer: true },

            // for(const obj of pagesPrayers){
            //     console.log('obj', obj)
            // }

            if (
                // tableName != 'favicon.ico' &&
                // tableName != '[slug]' &&
                tableName != 'about' &&
                tableName != 'tehilim'
            ) {
                poolConnection(req, res, resolve, reject, sqlQuery)
            }
        })
    }

    async createWord(req, res) {
        return new Promise((resolve, reject) => {
            let word
            let translate
            console.log('req.params_createWord', req.params)

            const tableName = req.params.table
            const sqlQuery = `INSERT INTO ${tableName} SET ?`

            console.log('req.body :>> ', req.body)
            console.log('req.body.translate :>> ', req.body.translate)

            if (req.body.translate == '') {
                console.log('need translate :>> ')
                const texts = [req.body.original]

                const body = {
                    sourceLanguageCode: process.env.source_language,
                    targetLanguageCode: process.env.target_language,
                    texts: texts,
                    folderId: process.env.folder_id,
                }

                const headers = { headers: { Authorization: `Bearer ${IAM_TOKEN}` } }

                // await axios
                axios
                    .post(
                        'https://translate.api.cloud.yandex.net/translate/v2/translate',
                        body,
                        headers,
                    )
                    .then((response) => {
                        // console.log('response.data: ', response.data)
                        translate = response.data.translations[0].text
                        // word = {
                        //     ...word,
                        //     translate: translate,
                        // }

                        word = {
                            original: req.body.original,
                            translate: translate,
                            description: req.body.description,
                            periodStart: req.body.periodStart,
                            periodEnd: req.body.periodEnd,
                        }

                        console.log('word_0000 :>> ', word)

                        poolConnection(req, res, resolve, reject, sqlQuery, word)
                    })
                    .catch((error) => {
                        console.log('AXIOS ERROR_post_translate: ', error.response)
                    })
            } else {
                console.log('translate from DB another word:>> ')

                // word = {
                //     ...word,
                // }
                console.log('word_111 :>> ', word)

                word = {
                    original: req.body.original,
                    translate: req.body.translate,
                    description: req.body.description,
                    periodStart: req.body.periodStart,
                    periodEnd: req.body.periodEnd,
                }

                poolConnection(req, res, resolve, reject, sqlQuery, word)
                console.log('New word posted after translate', word)
            }
        })
    }

    updateWord(req, res) {
        return new Promise((resolve, reject) => {
            console.log('req.body_updateWord', req.body)
            const { id, original, translate, description, periodStart, periodEnd } = req.body
            const tableName = req.params.table
            const sqlQuery = `UPDATE ${tableName} SET original = ?,  translate = ?,  description = ? ,  periodStart = ? ,  periodEnd = ?  WHERE id = ?`
            poolConnection(
                req,
                res,
                resolve,
                reject,
                sqlQuery,
                [original, translate, description, periodStart, periodEnd, id],
            )
        })
    }

    deleteWord(req, res) {
        return new Promise((resolve, reject) => {
            console.log('DELETE id :>> ')
            const tableName = req.params.table
            const sqlQuery = `DELETE from ${tableName} WHERE id = ?`
            poolConnection(req, res, resolve, reject, sqlQuery, [req.params.id])
        })
    }

    deleteTable(req, res) {
        return new Promise((resolve, reject) => {
            const tableName = req.params.table
            const sqlQuery = `DELETE from ${tableName} WHERE id >0`
            console.log('req.params_deleteTable :>> ', req.params)
            console.log('sqlQuery :>> ', sqlQuery)
            poolConnection(req, res, resolve, reject, sqlQuery)
        })
    }
}

module.exports = new WordsService()
