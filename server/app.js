const express = require('express')
const path = require('node:path')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

app.use(cors())

app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api', router)


module.exports = app