const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const config = require("../nodedetails/config")

const db = require("../nodedetails/db");


const signupRouter = require("../routes/signup.route");
const userinfoRoute = require("../routes/userinfo.route")
const medicineRoute = require("../routes/medicine.route")


let port = config.port;


const app = express()

app.set("port", port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use(function (err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
//     res.status(err.status || 500);
//     res.render("error");
 });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    return next();
});
  
app.get("/", (req, res) => {
    res.send(`<center><h4> Admin Panel1 </h4> </center>`);
});


app.use("/api/admin",signupRouter)
app.use("/api/staff",userinfoRoute)
app.use("/api/staff",medicineRoute)

// mongoose.connect('mongodb://localhost:27017' , (err) => {
//     if(!err) {
//         console.log('DB Connected');
//     }else{
//         console.log('DB not connected', err);
//     }
// })

let server;
if (config.serverType == "http") {
     const http = require("http");
     server = http.createServer(app);
     

     server.listen(port, () => console.log(`Local Back End server is running on http://localhost:${port}`));

} else {
     const https = require("https");
     server = https.createServer(config.serverOptions, app);
     server.listen(port, () => console.log(` Back End server is running on https://live.com`));
}

module.exports = app;