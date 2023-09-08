const UserModel = require("../model/userModel")
const bcrypt = require("bcrypt")

//signup
module.exports.signup = async function(req,res)
{
    let pass = req.body.password
    let encpass = bcrypt.hashSync(pass,10)
    console.log(encpass);
    req.body.password = encpass

    let user = new UserModel(req.body)
    let data = await user.save()

    res.json({data:data,msg:"Signup Done",rcode:200})   
}

//login
module.exports.login = async function(req,res)
{
    let email = req.body.email 
    let password = req.body.password 
  
    let user = await UserModel.findOne({email:email})
    
    if(user && bcrypt.compareSync(password,user.password)){         
             //update
             res.json({data:user,msg:"Login done",rcode:200})
    }else{      
            res.json({data:req.body,msg:"Invalid Credentials",rcode:-9})
    }
}