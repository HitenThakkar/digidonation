const express = require("express")
const sessionController = require("../controller/sessionController")
const donationController = require("../controller/donationController")
const router = express.Router()

//users
router.post("/signup",sessionController.signup)
router.post("/login",sessionController.login)
router.get("/listuser",sessionController.getAllUsers)


//donation
router.post("/createdonation",donationController.addDonation)
router.get("/getalldonation",donationController.getAllDonations)

module.exports = router 