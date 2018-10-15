var mongoose  = require("mongoose");
var Schema = mongoose.Schema;

var module1Schema = new Schema({
    name : String,
    email : String,
    password : String,
    address : {
        city : String,
        street : String,
        zipCode : Number
    },
    phoneNumber : Number
});  

// mongoose.model('usernotes', userNoteSchema);
module.exports = mongoose.model('users',module1Schema)
