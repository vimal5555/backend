const express = require("express")
const router = express.Router()
const auth = require("../helpers/other")


const validation  = require("../helpers/validation")
const userinfoController = require("../controllers/userinfo.controller")

router.post("/insertuserinfo", auth.isauthenticated,validation.postValidation ,userinfoController.adduserinfo)

router.post("/listsinguser", auth.isauthenticated,validation.postValidation ,userinfoController.listsingleuser)


router.get("/listalluserinfo", auth.isauthenticated,userinfoController.listalluserinfo)

router.get("/listactiveusers", auth.isauthenticated,userinfoController.listactiveusers)

router.post("/updatestatus", auth.isauthenticated,validation.postValidation ,userinfoController.updatestatus)






module.exports = router;