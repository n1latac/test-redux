const express = require('express')
const path = require('node:path')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

app.use(cors())

app.use(express.json())
app.use('/uploads', express.static(`${__dirname}/uploads`))
app.use('/api', router)


module.exports = app