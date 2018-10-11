let mongoose =  require("mongoose");

mongoose.set("debug",true)
mongoose.Promise = global.Promise

// mongoose.connect('mongodb://' + process.env.DBUSER + ':' + process.env.PSSWORD + '@' + process.env.DATABASEURL + ':' + process.env.DATABSEPORT + '/' + process.env.DATABASE)
//   .then(resopnse => {
//     console.log("+++ SUCCESS +++ :", `${process.env.DATABASEURL} Database server connected.... on port ${process.env.SERVER_PORT}`);
//   })
//   .catch(error => {
//     console.log("['ERROR']! While Connecting To Database", error);
//   })
// mongoose.connection.on('error', (err) => {
//   logger.error(err);
// });


mongoose.connect('mongodb://localhost:27017/mydb').then(response =>{
    console.log("connected to database")
}).catch(error =>{
    console.log("error",error)
})
