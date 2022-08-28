



const post = require('../database/model/post');



   
module.exports =async(req,res)=>{
  
  try{
  
   if (req.sessionID) {
      return res.render("createblog");
  }

  res.redirect('/auth/login')
  }
  catch(error){
   console.log(error.message)
  }
  

  
  
}

  















