

const cloudinary = require('cloudinary');
require('../handlers/cloudinary');
const upload = require('../handlers/multer');
const post = require('../database/model/post');
const express = require('express')
const  Router  = express.Router();
const auth = require('../authentication/auth')


Router.post('/post/store', upload.single('image'), auth,async (req, res) => {
    try{
 
 
     const imgurl = await cloudinary.v2.uploader.upload(req.file.path)
     
     const newpost = new post({
                 title:req.body.title,
                 description:req.body.description,
                 content:req.body.content,
                 username: req.body.username,
                
             });
    
     newpost.image = imgurl.secure_url
 
     
    
      await newpost.save();
         res.status(201).redirect('/'); 
    }
    catch(error){
      
     res.send(error);
    }
   }
)
 
 module.exports = Router;