const express = require("express")
const categoryController = require("../controller/categoryController")
const ItemController = require("../controller/itemController")

const router = express.Router()


// Category table
router.post("/addcategory",categoryController.addCategoty)
router.get("/getallcategory",categoryController.getAllCategories)
router.delete("/deletecategory/:categoryId",categoryController.deleteCategoryById)
router.post("/getidbyname",categoryController.getCategoryIdByName)

//Item table

router.post("/additem",ItemController.addItem)
router.get("/getallitem",ItemController.getAllItems)
router.delete("/deleteitem/:itemId",ItemController.deleteItemById)
router.post("/getitembyname",ItemController.getItemIdByName)

module.exports = router