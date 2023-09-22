const ItemModel = require("../model/itemModel")

module.exports.addItem = async function(req,res){
    let item = new ItemModel(req.body)

    let data = await item.save()

    res.json({data:data,msg:"Item Added",rcode:200})
}

//getAllItems
module.exports.getAllItems = function(req,res){
    ItemModel.find().then(data=>{
      res.json({data:data,msg:"Item Retrived",rcode:200})
    })
}

//delete item by id
module.exports.deleteItemById = function(req,res)
{
    let itemId = req.params.itemId

    console.log("ItemID = ",itemId)

    ItemModel.deleteOne({_id:itemId}).then((data)=>{
      res.json({ "msg":"Item Deleted" , "data":data , "rcode":200})
    }).catch((err)=>{
      res.json({ "msg":"No Rec Found" , "data":err , "rcode":-9})
    })
     
}