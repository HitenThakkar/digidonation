const express = require("express")
const sessionController = require("../controller/sessionController")
const router = express.Router()

router.post("/signup",sessionController.signup)
router.post("/login",sessionController.login)
router.post("/listuser",sessionController.getAllUsers)
module.exports = router 