const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const axios = require('axios')
const jose = require('node-jose')
require('dotenv').config()

const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

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

// MySQL=============================================
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'foo',
    password: 'foo',
    database: 'under-text',
})

function poolConnection(req, res, sqlQuery, params) {
    return pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query(sqlQuery, params, (err, rows) => {
            connection.release()
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

// Add a new word =============================================
app.post('/:table', async (req, res) => {
    let word
    let translate

    const tableName = req.params.table
    const sqlQuery = `INSERT INTO ${tableName} SET ?`

    // console.log('req.body :>> ', req.body)
    // console.log('req.body.translate :>> ', req.body.translate)


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

        await axios
            .post('https://translate.api.cloud.yandex.net/translate/v2/translate', body, headers)
            .then((response) => {
                // console.log('response.data: ', response.data)
                translate = response.data.translations[0].text
            })
            .catch((error) => {
                console.log('AXIOS ERROR_post_translate: ', error.response)
            })

        word = {
            original: req.body.original,
            translate: translate,
            description: req.body.description,
        }

        if (translate != undefined) {
            poolConnection(req, res, sqlQuery, word)
            console.log('New word posted after translate', word)
        } else {
            console.log('we have problem with translate this word:', word)
        }
        
    } else {
        console.log('translate from DB another word:>> ')

        word = {
            original: req.body.original,
            translate: req.body.translate,
            description: req.body.description,
        }

        poolConnection(req, res, sqlQuery, word)
        console.log('New word posted after translate', word)
    }


  
})

// // Get all words ==============================================
// app.get('', (req, res) => {
//     const sqlQuery = 'SELECT * from words'
//     poolConnection(req, res, sqlQuery)
// })

//  Get all words by table ==============================================
app.get('/:table', (req, res) => {
    const tableName = req.params.table
    const sqlQuery = `SELECT * from ${tableName}`

    console.log('req.params111 :>> ', req.params)
    console.log('sqlQuery :>> ', sqlQuery)

    poolConnection(req, res, sqlQuery)
})

// Get a word by table and by ID ==============================================
app.get('/:table/:id', (req, res) => {
    const tableName = req.params.table
    const sqlQuery = `SELECT * from ${tableName} WHERE id = ?`

    console.log('req.params222 :>> ', req.params)
    console.log('sqlQuery :>> ', sqlQuery)

    poolConnection(req, res, sqlQuery, [req.params.id])
})

// Update a word by table and by ID ===========================================
app.put('/:table/:id', (req, res) => {
    const { id, original, translate, description } = req.body
    const tableName = req.params.table
    const sqlQuery = `UPDATE ${tableName} SET original = ?,  translate = ?,  description = ?  WHERE id = ?`
    poolConnection(req, res, sqlQuery, [original, translate, description, id])
})

// Delete a word by table and by ID =============================================
app.delete('/:table/:id', (req, res) => {
    const tableName = req.params.table
    const sqlQuery = `DELETE from ${tableName} WHERE id = ?`
    poolConnection(req, res, sqlQuery, [req.params.id])
})

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
