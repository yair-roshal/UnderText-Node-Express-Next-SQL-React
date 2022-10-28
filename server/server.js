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

app.post('/files/:id', (req, res) => {
    let word = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        json: req.body.json,
    }

    
    let file_name = `${req.body.id}-${req.body.name}.json`

    fs.writeFileSync(file_name, JSON.stringify(word, null, 2), err => {
        if (err) throw err
        console.log(`Data written to file ${file_name}`)
    })
    res.send(file_name)

    console.log('This is after the write call')
})

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

// import files from PC=============================================
app.post('/import/', (req, res) => {
    let fileName = req.body.name
    const type = req.body.name.slice(-5)

    if (type != '.json') {
        fileName = `${req.body.name}.json`
    }
    let data = fs.readFileSync(fileName)

    let newId = req.body.newId
    data = JSON.parse(data)

    newObject = { ...data, id: newId }

    let sqlQuery = 'INSERT INTO words SET ?'

    con.query(sqlQuery, newObject, (err, results) => {
        if (err) throw err
        console.log('word added')
        res.send(results)
    })
})

app.post('', (req, res) => {
    let word = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        json: req.body.json,
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
        const { id, name, image, json } = req.body
        connection.query(
            'UPDATE words SET name = ?,  image = ?,  json = ?  WHERE id = ?',
            [name, image, json, id],

            (err, rows) => {
                connection.release()

                if (!err) {
                    res.send(`Word with the name: ${name} has been added.`)
                } else {
                    console.log(err)
                }
            },
        )
    })
})

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
