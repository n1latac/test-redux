const path = require('node:path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const types = ['image/png', 'image.jpg', 'image.jpeg']

const fileFilter = (req, file, cb)=>{
    if(types.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({storage})

module.exports = upload