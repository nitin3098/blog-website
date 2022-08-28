


const post = require('../database/model/post');


module.exports = async(req,res)=>{
    try{
     const _id = req.params.id;
    
     const posts = await post.findById(_id);
        
     res.render('post',{
        posts
     })
 
    
    }
    catch(err){
     res.send(err);
    }
 }
 