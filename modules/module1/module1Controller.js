
const User = require("./module1Model")
const module1Controller = {}



module1Controller.login = ((req,res)=> {
    const { body } =  req
    const { mobileNumber , password } = body
   

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

  User.count({"email" : email}).then(result => {

   let resultsss =  module1Controller.isUserAlreadyExists(email)
    if (resultsss[1] == null){

    }
   

        if (result > 0) {
          res.status(400).json({"msg":"User Already Exists"})
        }else{
          user.save().then(result =>{
            res.status(200).json({"msg":"saved"})
          }).catch(error => {
            res.status(400).json({"msg":"User Not registred"})
          })
        }
    }).catch(error => {
      res.status(500).json({"msg":"Developer Error"})
    })
   
    

})

module1Controller.isUserAlreadyExists = (email) => {
  User.findOne({"email" : email}).then((result) => {
      return (result,null);
  }).catch(err => {
      return (null,err);
  })

}


module.exports =  module1Controller