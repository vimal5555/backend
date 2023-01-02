var jwt = require('jsonwebtoken')
var keys = require("../keys/keys")


module.exports.admin_create_payload = (data, key)=>{
	var token = jwt.sign(data, key,  {expiresIn:"1d"});
	return token;
}

exports.isauthenticated = (req,res,next)=>{
	var secret_key = keys.key;
	var token = req.headers.authorization;
	jwt.verify(token, secret_key, (err, decoded)=>{
	if(decoded){
        // console.log(decoded)
		req.user_id = decoded.id;
		req.level = decoded.level;
		next()
	}else{
		res.status(201).send({status:err, code:400, message:'Token expired'})
	}
	})
}