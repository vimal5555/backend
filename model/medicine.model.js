const mongoose = require("mongoose");
const config = require('../nodedetails/config');


const medicineSchema = new mongoose.Schema({
    "name" : {
        type : String,
        default : ""
    },
    "type" : {
        type : String,
        default : ""
    },
    "prescribedfor" : {
        type : Array,
        default : []
    },
    "hospital" : {
        type : String,
        default : ""
    }

})

medicineSchema.index({ name : 1})

module.exports = mongoose.model("medicine",medicineSchema,config.dbPrefix + "medicine") 