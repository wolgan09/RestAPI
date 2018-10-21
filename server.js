let express = require("express")
let app = express()
const bodyParser = require("body-parser");  
let translater = require('jm-ez-l10n')
 
require('./Config/database.js');

app.use(bodyParser.json({ limit: "50mb", parameterLimit: 1000000 }));
app.use(require('./router'))

//language setting
translater.setTranslationsFile('en','./config/constant.en.json')
app.use(translater.enableL10NExpress);

// app.all("/*", (req, res, next) => {
//     console.log(req)
//     res.header("Access-Control-Allow-Origin", process.env.SecureUrl);
//     res.header("Access-Control-Request-Headers", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With,Content-Type, Accept,Access-Control-Allow-Headers, x-auth-token"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     next();
//   });
  

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.info(`Server is running on ${PORT}`)
})