const mongoose = require('mongoose');
const query = require("../helpers/query")
const encryption = require ("../helpers/encryption")
const validation = require("../helpers/validation")
const signup = require("../model/signup.model")
const jwt = require("jsonwebtoken")
const keys = require("../keys/keys")
const payload = require("../helpers/other")

exports.signup = (req,res) =>{
    try{


        let email = req.body.email.toLowerCase()
        let password = req.body.password
        let hospital = req.body.hospital.toLowerCase()
        let designation = req.body.designation.toLowerCase()
        var data ={
            email : encryption.encrypt_data(email),
            password : encryption.encrypt_data(password),
            hospital: encryption.encrypt_data(hospital),
            designation : encryption.encrypt_data(designation)
        }
        console.log(data)
        query.findoneData("signup",data,{},(result)=>{

            if(result){
                return res.json({status : 400 , message : "Data already exist"})

               
            }
            else{
                query.insertData("userinfo",data,(suc)=>{
                    if(suc){
                        return res.json({ status : 200 ,message : "Signed up Successfully"})
                    }
                    else{
                        res.json({ status: 300, message: "Error in Sign in ", "data": {} })
        
                    }
                })
            }

        })
     
       

    }
    catch{(errr)=>{
        return res.json({ status : errr, message : "Error in hitting signup"})

    }
    }

}

exports.signin = (req,res) =>{
try{
    let data = {
        email : encryption.encrypt_data(req.body.email.toLowerCase()) ,
        password : encryption.encrypt_data(req.body.password),
        designation : encryption.encrypt_data(req.body.designation.toLowerCase())
    }
    
    query.findoneData("signup", data,{},(result)=>{

        if(result){
           var token = payload.admin_create_payload(req.body, keys["key"],)
            return res.json({status : 200, message : " Logged in successfully" , result : token})
        }
        else{
           return res.json ({ status : 404 , message: "invalid credentials"})
        }
    })

    // signup.findOne({data, ()})

}
catch{
    return res.json({status : 404, message : " Sign in not possible"})
}
}

exports.details =(req,res) =>{
    try{
        signup.findOne({}, (err,result)=>{
        if(result){
            return res.json({ message : "worked", data : result})
        }
        })

    }
    catch{
        return res.json({ })
    }
}
