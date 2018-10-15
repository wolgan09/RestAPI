let express = require('express')
let module1Controller = require('./module1Controller')


const module1Router = express.Router()


module1Router.use((req,res,next) => {
    next()
})

module1Router.post('/login',module1Controller.login)
module1Router.post('/register',module1Controller.register)

module.exports = module1Router