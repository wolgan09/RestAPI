let express = require('express')
let module1Controller = require('./module1Controller')


const module1Router = express.Router()


module1Router.use((req,res,next) => {
    
    console.log(req.body)
    console.log(req.params)
    next()
})

module1Router.post('/login',module1Controller.login)

module.exports = module1Router