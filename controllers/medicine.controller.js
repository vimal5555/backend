const mongoose = require('mongoose');
const query = require("../helpers/query")
const encryption = require ("../helpers/encryption")
const validation = require("../helpers/validation")
const signup = require("../model/signup.model")
const jwt = require("jsonwebtoken")
const keys = require("../keys/keys")
const payload = require("../helpers/other")


exports.addmedicine =(req,res) =>{
    try{
        let data = req.body
   query.insertData("medicine",data,(suc)=>{
    if(suc){
        return res.json({ status : 200, message : "Inserted Successfully ", data : suc })
    }
    else{
        return res.json ({status : 400, message : " Errror in adding"})
    }
   })

    }
    catch{
        return res.json({ status : 400, message : "Something went wrong " })
    }
}

exports.listmedicine =(req,res) =>{
    try{
   query.findData("medicine",{},{},{},{},(suc)=>{
    if(suc){
        return res.json({ status : 200, message : " medicine list  all Successfully ", data : suc })

    }
    else{
        return res.json ({status : 400, message : "failed to fetch"})

    }
   })

    }
    catch{
        return res.json({ status : 400, message : "Something went wrong " })
    }
}

exports.listmedicineofhospital =(req,res) =>{
    try{
        let hospital = req.body
        query.findData("medicine",hospital,{},{},{},(suc)=>{
            if(suc){
                return res.json({ status : 200, message : " medicine list  all Successfully ", data : suc })
        
            }
            else{
                return res.json ({status : 400, message : "failed to fetch"})
        
            }
        })

    }
    catch{
        return res.json({ status : 400, message : "Something went wrong " })
    }
}

