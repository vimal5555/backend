const mongoose = require("mongoose");
const config = require('../nodedetails/config');


const userinfoSchema = new mongoose.Schema({
    "name" : {
        type : String,
        default : ""
    },
    "parentname" : {
        type : String,
        default : ""
    },
    "phonenumber" : {
        type : String,
        default : ""
    },
    "userid" : {
        type : String,
        default : ""
    },
    "address" : {
        type : String,
        default : ""
    },
    "hospitalname" : {
    type : String,
    default : ""
    },
    "status" : {
        type : Boolean,
        default : true
    },
    "ticketid" : {
        type : Number,
        default : 0000
    }
}
)

userinfoSchema.index({ userid : 1})

module.exports = mongoose.model("userinfo",userinfoSchema,config.dbPrefix + "userinfo") 