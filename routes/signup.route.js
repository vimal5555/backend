const express = require("express")
const router = express.Router()
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024 } });

const validation  = require("../helpers/validation")
const signupController = require("../controllers/signup.controller")
const auth = require("../helpers/other")

router.post("/signup",validation.postValidation ,signupController.signup)

router.post("/signin",validation.postValidation , signupController.signin )

router.get("/details", auth.isauthenticated, signupController.details )

module.exports = router;