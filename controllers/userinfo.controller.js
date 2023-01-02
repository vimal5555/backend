const query = require("../helpers/query")
const encryption = require ("../helpers/encryption")
const userinfo = require("../model/userinfo.model")
const keys = require("../keys/keys")

exports.adduserinfo =(req,res) =>{
    try{
        let data = req.body
        query.insertData("userinfo",data,(suc)=>{
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

exports.listalluserinfo =(req,res) =>{
try{
query.findData("userinfo",{},{},"","",(suc)=>{
    if(suc){
        return res.json({status : 200 , data : suc})
    }
    else{
        return res.json({status : 400,data : []})
    }
})
}
catch{
    return res.json({ status : 400, message: "Error in addding" })

}
}

exports.listsingleuser = (req,res)=>{
    try{
query.findoneData("userinfo",{userid : req.body.userid},{},(suc)=>{
    if(suc){
        return res.json({status : 200, message : "valid id", data : suc})

    }
    else{
        return res.json({status : 400, message : "not a valid id"})
    }
})
    }
    catch{
        return res.json({ status : 400, message: "Error in addding" })

    }
}


exports.listactiveusers = (req,res) =>{
    try{
query.findData("userinfo",{status : true},{},{},{},(suc)=>{
    if(suc){
        return res.json({status : 200, message : "current active users", data: suc})

    }
    else{
        return res.json({status : 400, message : "not a valid id"})

    }
})
    }
    catch{
        return res.json({ status : 400, message: "Error in addding" })

    }
}

exports.updatestatus = (req,res) =>{
    try{
        query.updateData("userinfo","one",{ticketid : req.body.ticketid},{status : req.body.status},(suc)=>{
            if(suc){
                return res.json({status : 200, message : "updated successfully", data: suc})

            }
            else{
                return res.json({status : 200, message : "fail ", })

            }
        })

    }
    catch{
        return res.json({ status : 400, message: "Error in addding" })

    }
}