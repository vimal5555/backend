const query = require("../helpers/query")
const encryption = require ("../helpers/encryption")
const visitrecord = require("../model/visitrecord.model")
const keys = require("../keys/keys")

exports.addvisitrecord =(req,res) =>{
    try{
        let data = req.body
        query.insertData("visitrecord",data,(suc)=>{
            if(suc){
                return res.json({ status : 200 ,message : "inserted Successfully", data : suc})
            }
            else{
                res.json({ status: 300, message: "Error in ", data: {} })

            }
        })    

    }
    catch{
        return res.json({ status : 400, message: "Error in addding" })
    }
}