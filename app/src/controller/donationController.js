const donationModel = require("../model/donationModel");
const DoantionModel = require("../model/donationModel");
const ItemModel = require("../model/itemModel")

module.exports.addDonation = async function(req,res)
{
    let categoryId;
    let userId = req.body.userId;
    let itemName = req.body.itemName;
    let donationDate = req.body.donationDate;
    let assignInd = parseInt(req.body.assignInd); // Assuming assignInd is a number
    let statusInd = parseInt(req.body.statusInd); // Assuming statusInd is a number
    let title = req.body.title;
    let keywords = req.body.keywords;
    let description = req.body.description;

    let itemId; // Declare it in a higher scope


    try {
        const data = await ItemModel.findOne({ itemName: itemName });
        itemId = data._id;
        categoryId = data.categoryId;
        // res.json({ "msg": "Added", "data": data, "rcode": 200 });
    } catch (err) {
        res.json({ "msg": "No Rec Found", "data": err, "rcode": -9 });
    }

    const newDonation = 
    {
        "userId": userId,
        "categoryId": categoryId,
        "itemId":itemId,
        "donationDate":donationDate,
        "assignInd":assignInd,
        "statusInd":statusInd,
        "title":title,
        "keywords":keywords,
        "description":description,
    }
    
    let donation = new DoantionModel(newDonation)
    let data = await donation.save()

    res.json({data:data,msg:"donation created", rcode:200})
}



//getAllDonations
module.exports.getAllDonations = function(req,res){
    donationModel.find().then(data=>{
      res.json({data:data,msg:"Data Retrived",rcode:200})
    })
}
  