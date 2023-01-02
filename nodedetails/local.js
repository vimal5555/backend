var encrypter = require("../helpers/encryption")

module.exports = {
   
    dbConnection : "mongodb://localhost:27017/doctorapp",
    port:1323,
    watch: true,
    ignore_watch: ["logs/*"],
    serverType: "http",
    dbPrefix: "hello"
  
};
