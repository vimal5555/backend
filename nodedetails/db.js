const mongoose = require('mongoose');
const config = require('../nodedetails/config');

console.log("err")
mongoose.connect(config.dbConnection)
    .then(() => console.log('DB connection successful: ', config.dbConnection))
    .catch((err) => console.error("errron in db",err));

mongoose.connection.on('connected', function () {
    console.log('Front Mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
    console.log('Front Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Front Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Front Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

require("../model/signup.model")
require("../model/signup.model")
require("../model/medicine.model")