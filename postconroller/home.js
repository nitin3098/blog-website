
const post = require('../database/model/post');


module.exports = async (req, res) => {
    try{
     const posts = await post.find({});
    
     res.status(200).render('index', {
         posts
     })
 
    }
    catch(err){
     res.send(err);
    }
     
 }
 