const bcrypt = require('bcrypt');
const user = require('../database/model/user');

module.exports= async(req,res)=>{
   try{
    const newuser = new user({
        ...req.body }, (error)=>{
       
     })


        if (!( newuser.username &&  newuser.email && newuser.password)) {
         return res.status(400).send({ error: "Data not formatted properly" });
       }

    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(newuser.password,salt);

        await newuser.save();
       // console.log(newuser);
        res.status(201).redirect('/'); 
   }
   catch(error){
     console.log(error.message)
    //res.send(error);
   }



}