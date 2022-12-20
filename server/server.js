require('dotenv').config({ path: '../.env' })
const express = require('express')
const app = express()
const routes = require('./routes/index')

const bodyParser = require('body-parser')
const cors = require('cors')
const host = process.env.HOST
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', routes)

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`))
