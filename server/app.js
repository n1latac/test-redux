const express = require('express')
const path = require('node:path')
const cors = require('cors')
const router = require('./api/index')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/uploads', express.static(`${__dirname}/uploads`))
//app.use('/api', router)
app.use('/test',async(req, res)=>{
    try {
        res.send('hello3')
    } catch (error) {
        
    }
})


module.exports = app