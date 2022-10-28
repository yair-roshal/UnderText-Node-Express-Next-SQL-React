const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
var cors = require('cors')
const fs = require('fs')

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

// Get all words==============================================
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * from words', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Get a word by ID==============================================
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * from words WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Delete a word
app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('DELETE from words WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Word with ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
        })
    })
})

// Add a word  ==============================================
const con = mysql.createConnection({
    host: 'localhost',
    user: 'foo',
    password: 'foo',
    database: 'under-text',
})

con.connect(err => {
    if (err) {
        console.log('Err connecting ')
        return
    }
    console.log('connection established ')
})

 

app.post('', (req, res) => {
    let word = {
        id: req.body.id,
        original: req.body.original,
        translate: req.body.translate,
        description: req.body.description,
    }
 
    let sqlQuery = 'INSERT INTO words SET ?'

    con.query(sqlQuery, word, (err, results) => {
        if (err) throw err
        console.log('word added')
        res.send(results)
    })
})

// Update a word ===========================================
app.put('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const { id, original, translate, description } = req.body
        connection.query(
            'UPDATE words SET original = ?,  translate = ?,  description = ?  WHERE id = ?',
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
