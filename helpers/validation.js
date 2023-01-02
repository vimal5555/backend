const validator = require('node-validator');

let emptycheck = /([^\s])/;
let email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


exports.postValidation = (req, res, next) => {
    try {
        let path = req.route.path;
        let data = req.body;
        let check;

        if (path == "/signup") {
            check = validator.isObject()
                .withRequired('email', validator.isString({ regex: email, message: "Please provide valid email" }))
                .withRequired('password', validator.isString({ regex: emptycheck, message: "Please provide valid password" }))
                .withRequired('hospital', validator.isString({ regex: emptycheck, message: "Please provide valid hospital name" }))
                .withRequired("designation", validator.isString({ regex: emptycheck, message: "Please provide valid designation" }))
        }
        if (path == "/signin") {
            check = validator.isObject()
                .withRequired('email', validator.isString({ regex: email, message: "Please provide valid email" }))
                .withRequired('password', validator.isString({ regex: emptycheck, message: "Please provide valid password" }))
                .withRequired("designation", validator.isString({ regex: emptycheck, message: "Please provide valid designation" }))
        }
        if (path == "/insertuserinfo") {
            check = validator.isObject()
                .withRequired('name', validator.isString({ message: "Please provide valid name" }))
                .withOptional('parentname', validator.isString({ regex: emptycheck, message: "Please provide valid password" }))
                .withOptional("address", validator.isString({ regex: emptycheck, message: "Please provide valid designation" }))
                .withRequired('userid', validator.isString({ message: "Please provide valid name" }))
                .withRequired("hospitalname", validator.isString({ regex: emptycheck, message: "Please provide valid hospital name" }))
                .withOptional("phonenumber", validator.isString({ regex: emptycheck, message: "Please provide valid designation" }))
                .withOptional("status", validator.isBoolean({ regex: emptycheck, message: "Please provide valid designation" }))
                .withOptional("ticketid", validator.isNumber({ regex: emptycheck, message: "Please provide valid designation" }))

        }
        if (path == "/listsinguser") {
            check = validator.isObject()
                .withRequired('userid', validator.isString({ message: "Please provide valid user Id" }))

        }
        if (path == "/updatestatus") {
            check = validator.isObject()

                .withRequired('ticketid', validator.isString({ message: "Please provide valid user Id" }))
                .withRequired('status', validator.isBoolean({ message: "Please provide valid status" }))


        }
        if (path == "/addmedicine") {
            check = validator.isObject()
            
                .withRequired('name', validator.isString({ message: "Please provide valid user Id" }))
                .withRequired('type', validator.isString({ message: "Please provide valid status" }))
                .withRequired('prescribedfor', validator.isArray())
                .withRequired('hospital', validator.isString({ message: "Please provide valid status" }))



        }
        if (path == "/listmedicineofhospital") {
            check = validator.isObject()

                .withRequired('hospital', validator.isString({ message: "Please provide valid user Id" }))


        }



        validator.run(check, data, (errorcount, errors) => {
            if (errorcount == 0) {
                next();
            } else {
                let errormsg = '';
                for (let i = 0; i < errors.length; i++) {
                    if (errormsg != '') {
                        errormsg += ', ';
                    }
                    if (errors[i].message == 'Required value.' && errors[i].value == undefined) {
                        errors[i].message = errors[i].parameter + ' is required'
                    } else if (errors[i].value != undefined || errors[i].value == "" || errors[i].value == [] || errors[i].message == "Unexpected value.") {
                        console.log("inside validation", errors[i].message, errors[i].value)
                        errors[i].message = "Not a valid " + errors[i].parameter
                    } else {
                        errors[i].message = errors[i].message;
                    }
                    errormsg += errors[i].message;
                }
                res.json({ "status": false, "message": errormsg })
            }
        })
    } catch (e) {
        console.log("Error catched in validation", e);
        res.json({ "status": false, "message": "Oops! Something went wrong. Please try again later" })
    }
}