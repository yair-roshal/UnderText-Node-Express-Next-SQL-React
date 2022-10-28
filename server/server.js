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
    let graph = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        json: req.body.json,
    }

    let file_name = `${req.body.id}-${req.body.name}.json`

    fs.writeFileSync(file_name, JSON.stringify(graph, null, 2), err => {
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
    database: 'graphs-d3',
})

// Get all graphs==============================================
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * from graphs', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Get a graph by ID==============================================
app.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * from graphs WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Delete a graph
app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('DELETE from graphs WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Graph with ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
        })
    })
})

// Add a graph  ==============================================
const con = mysql.createConnection({
    host: 'localhost',
    user: 'foo',
    password: 'foo',
    database: 'graphs-d3',
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

    let sqlQuery = 'INSERT INTO graphs SET ?'

    con.query(sqlQuery, newObject, (err, results) => {
        if (err) throw err
        console.log('graph added')
        res.send(results)
    })
})

app.post('', (req, res) => {
    let graph = {
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        json: req.body.json,
    }

    let sqlQuery = 'INSERT INTO graphs SET ?'

    con.query(sqlQuery, graph, (err, results) => {
        if (err) throw err
        console.log('graph added')
        res.send(results)
    })
})

// Update a graph ===========================================
app.put('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const { id, name, image, json } = req.body
        connection.query(
            'UPDATE graphs SET name = ?,  image = ?,  json = ?  WHERE id = ?',
            [name, image, json, id],

            (err, rows) => {
                connection.release()

                if (!err) {
                    res.send(`Graph with the name: ${name} has been added.`)
                } else {
                    console.log(err)
                }
            },
        )
    })
})

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))
