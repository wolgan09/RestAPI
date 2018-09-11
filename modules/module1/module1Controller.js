
const module1Controller = {}

module1Controller.login = ((req,res)=> {
    const { body } =  req
    const { mobileNumber , password } = body
    
    if (mobileNumber === 1234567890 && password === 12345){
        return res.status(200).json({"message":"Logged In"})
    }

})

module.exports =  module1Controller