const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors') 

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

// Get all words ==============================================
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const sqlQuery = 'SELECT * from words'
        connection.query(sqlQuery, (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Get a word by ID ==============================================
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const sqlQuery = 'SELECT * from words WHERE id = ?'

        connection.query(sqlQuery, [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Delete a word =============================================
app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const sqlQuery = 'DELETE from words WHERE id = ?'

        connection.query(sqlQuery, [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Word with ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
        })
    })
})

app.post('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        const word = {
            original: req.body.original,
            translate: req.body.translate,
            description: req.body.description,
        }

        const sqlQuery = 'INSERT INTO words SET ?'

        connection.query(sqlQuery, word, (err, results) => {
            if (err) throw err
            console.log(word.original + ' added to you BD')
            res.send(results)
        })
    })
})

// Update a word ===========================================
app.put('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const { id, original, translate, description } = req.body
        const sqlQuery =
            'UPDATE words SET original = ?,  translate = ?,  description = ?  WHERE id = ?'

        connection.query(
            sqlQuery,
            [original, translate, description, id],

            (err, rows) => {
                connection.release()

                if (!err) {
                    res.send(`Word with the original: ${original} has been added.`)
                } else {
                    console.log(err)
                }
            },
        )
    })
})

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
