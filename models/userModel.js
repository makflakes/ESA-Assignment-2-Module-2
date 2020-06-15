var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username:{
        type:String,
        required:"kindly enter the username",
        unique:true
    },

    password:{
        type:String,
        required:"kindly enter the password",
    },

    emailId:{
        type:String,
        required:"kindly enter emailid",
    },

})

module.exports = mongoose.model('User', UserSchema);