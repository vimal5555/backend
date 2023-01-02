const mongoose = require("mongoose");
const config = require('../nodedetails/config');


const signupSchema = new mongoose.Schema({
    "email" : {
        type : String,
        default : ""
    },
    "password" : {
        type : String,
        default : ""
    },
    "hospital" : {
        type : String,
        default : ""
    },
    "designation" : {
        type : String,
        default : ""
    }
})

signupSchema.index({ email : 1})

module.exports = mongoose.model("signup",signupSchema,config.dbPrefix + "signup") 