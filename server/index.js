const http = require('http')
const mongoose = require('mongoose')
const  app = require('./app.js')

const PORT = process.env.PORT || 5000
const server = http.createServer(app)


const start = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/redux-test')

        server.listen(PORT,()=>{
            console.log(`Server start on port ${PORT}`)
        })
    }catch(error){
        console.log('connected failed')
        process.exit(1)
    }
    
}
start();

//mongodb+srv://vpoltavskiy:vladwwwqqq1234@cluster0.gvpfjuk.mongodb.net/project?retryWrites=true&w=majority

