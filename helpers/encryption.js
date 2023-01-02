const crypto = require('crypto');
var CryptoJS = require("crypto-js")

let algorithm = 'aes-256-ctr';
let password = 'StCaErRaZaBnIoK2122TOSCD1S2N3A4E';
// let iv = 'K102I3n4aZbYCxDw';


var key = CryptoJS.enc.Base64.parse("#base64Key#"),
	iv = CryptoJS.enc.Base64.parse("#base64IV#");

module.exports = {
	encrypt: function (value) {
		let cipher = crypto.createCipheriv(algorithm, password, iv);
		let crypted = cipher.update(value, 'utf8', 'hex')
		crypted += cipher.final('hex');
		return crypted;
	},
	decrypt: function (value) {
		let decipher = crypto.createDecipheriv(algorithm, password, iv)
		let dec = decipher.update(value, 'hex', 'utf8')
		dec += decipher.final('utf8');
		return dec;
	}
};

module.exports = {
	_encrypt:function(data){
		var cipherid, encrypted;
		cipherid =	CryptoJS.AES.encrypt(JSON.stringify(data), key_data, {iv:iv_data}).toString();
		encrypted = encodeURIComponent(cipherid)
		return encrypted;
	},

	_decrypt:function(data){
		var decoURL, bytes;
		decoURL = decodeURIComponent(data);
		bytes  = CryptoJS.AES.decrypt(decoURL,  key_data, {iv:iv_data}).toString(CryptoJS.enc.Utf8);
		return bytes;
	},

	encrypt_data:(param) => {
		var cipher = CryptoJS.AES.encrypt(param, key, {iv: iv}).toString(); 
		return cipher;
	},

	decrypt_data:(param) =>{
		var decipher = CryptoJS.AES.decrypt(param, key, {iv: iv}).toString(CryptoJS.enc.Utf8)
		return decipher;
	},

	base_encrypt:(data)=>{
		var buff = new Buffer(data);
		var enc_data = buff.toString('base64');
		return enc_data;
	},

	base_decrypt:(data)=>{
		var buff = new Buffer(data, 'base64');
		var dec_data = buff.toString('ascii');
		return dec_data;
	},

	password_enc:(data, cb)=>{
		var salt = crypto.randomBytes(16).toString('base64');
	    var rsalt = Buffer.from(salt).toString('base64');
		encrypt_password(data, rsalt, defaultIterations, defaultKeyLength, 'sha1', (result) => {
			cb({salt:salt, encr:result})
		})		
	},

	password_dec:(data, salt, cb)=>{
	    var rsalt = Buffer.from(salt).toString('base64');
		encrypt_password(data, rsalt, defaultIterations, defaultKeyLength, 'sha1', (key) => {
			cb(key)
		})		
	},
	_validate_ipv4(ip){
		return v4exact.test(ip)
	},

	_validate_ipv6(ip){
		return v6exact.test(ip)
	}
}