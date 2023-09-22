const categoryModel = require("../model/categoryModel")
const CategoryModel = require("../model/categoryModel")

module.exports.addCategoty = async function(req,res){
    
    // let categoryName = req.body.categoryName

    let category = new CategoryModel(req.body)

    let data = await category.save()

    res.json({data:data,msg:"Category Added",rcode:200})
}

//getAllcategories
module.exports.getAllCategories = function(req,res){
    categoryModel.find().then(data=>{
      res.json({data:data,msg:"Category retrived",rcode:200})
    })
}

//delete category by id
module.exports.deleteCategoryById = function(req,res)
{
    let categoryId = req.params.categoryId

    console.log("CategoryID = ",categoryId)

    CategoryModel.deleteOne({_id:categoryId}).then((data)=>{
      res.json({ "msg":"Category Deleted" , "data":data , "rcode":200})
    }).catch((err)=>{
      res.json({ "msg":"No Rec Found" , "data":err , "rcode":-9})
    })
     
}