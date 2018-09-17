let express = require('express')
let module1Controller = require('./module1Controller')


const module1Router = express.Router()


module1Router.use((req,res,next) => {
    next()
})

module1Router.get('/login',module1Controller.login)

module.exports = module1Router