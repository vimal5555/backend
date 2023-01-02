const express = require("express")
const router = express.Router()
const auth = require("../helpers/other")


const validation  = require("../helpers/validation")
const visitrecordController = require("../controllers/visitrecord.controller")

router.post("/insertuserinfo", auth.isauthenticated,validation.postValidation ,visitrecordController.addvisitrecord)








module.exports = router;