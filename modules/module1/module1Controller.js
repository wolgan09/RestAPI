const User = require("./module1Model")
const module1Controller = {}



module1Controller.login = ((req,res)=> {
    const { body } =  req
    const { mobileNumber , password } = body
    module1Controller.isUserAlreadyExists(mobileNumber)
});

module1Controller.checkUserExist = (req, res) => {
    const { email, phone, loginType } = req.body;
    let promise = userUtils.checkUserExist(email, 'email');
  
    const { loginTypes } = constants.auth;
  
    if (loginTypes.Mobile.is(loginType)) {
      promise = userUtils.checkUserExist(phone, 'phone');
    }
  
    promise
      .then((isExist) => {
        res.status(200).json({ isExist });
      })
      .catch((err) => {
        logger.error(err);
        res.status(500).json({ error: req.t('ERR_INTERNAL_SERVER') });
      });
  };
  


module1Controller.register = ((req,res) => {
    
    const { name , email, password } = req.body
    const user = new User ({
      name,
      email,
      password 
    })

    module1Controller.isUserAlreadyExists(email).then((result,reject) => {
        if (reject){
           
        }else if (result != null){
             res.status(400).json({"msg":"User Already Exists"})
        }
       
    }).catch(error => {
        user.save().then(dbRes =>{
            res.status(200).json({"msg":"saved"})
        }).catch(err => {
            res.status(500).json({"msg":"Database operation error"})
        })
    })
})

module1Controller.isUserAlreadyExists = (email) => {

    return new Promise((resolve, reject) => {
        User.findOne({"email":email},(error, result) => {
            if (error){
                reject(error)
            }
            if (result == null){
                reject({"msg":"No data found"})  
            }else{
                mresolve(result)
            }
            
        })
    })
}

module.exports =  module1Controller