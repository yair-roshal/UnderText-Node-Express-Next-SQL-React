const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

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
            // connection.release()
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
}

// Get all words ==============================================
app.get('', (req, res) => {
    const sqlQuery = 'SELECT * from words'
    poolConnection(req, res, sqlQuery)
})

// Get a word by ID ==============================================
app.get('/:id', (req, res) => {
    const sqlQuery = 'SELECT * from words WHERE id = ?'
    poolConnection(req, res, sqlQuery, [req.params.id])
})

// Add a new word =============================================
app.post('', (req, res) => {
    const sqlQuery = 'INSERT INTO words SET ?'
    const word = {
        original: req.body.original,
        translate: req.body.translate,
        description: req.body.description,
    }
    poolConnection(req, res, sqlQuery, word)
})

// Update a word ===========================================
app.put('/:id', (req, res) => {
    const { id, original, translate, description } = req.body
    const sqlQuery = 'UPDATE words SET original = ?,  translate = ?,  description = ?  WHERE id = ?'
    poolConnection(req, res, sqlQuery, [original, translate, description, id])
})

// Delete a word =============================================
app.delete('/:id', (req, res) => {
    const sqlQuery = 'DELETE from words WHERE id = ?'
    poolConnection(req, res, sqlQuery, [req.params.id])
})

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
