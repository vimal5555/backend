const express = require("express")
const router = express.Router()
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024 } });

const validation  = require("../helpers/validation")
const medicineController = require("../controllers/medicine.controller")
const auth = require("../helpers/other")

router.post("/addmedicine",validation.postValidation ,medicineController.addmedicine)

router.get("/listmedicine",auth.isauthenticated , medicineController.listmedicine )

router.post("/listmedicineofhospital",validation.postValidation , medicineController.listmedicineofhospital )



module.exports = router;