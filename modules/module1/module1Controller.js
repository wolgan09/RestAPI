
const module1Controller = {}

module1Controller.login = ((req,res)=> {
    const { body } =  req
    // console.log(req)
    console.log(body)

    const { mobileNumber , password } = body
    console.log(mobileNumber)
})

module.exports =  module1Controller