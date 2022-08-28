const bcrypt = require('bcrypt');
const User = require('../database/model/user');


module.exports = async(req,res)=>{
    const body = req.body;
    const user = await User.findOne({email: body.email});
   
    if(user){
        const validpassword = await bcrypt.compare(body.password,user.password);
       
        if(validpassword){
            req.session.isAuth = true
            req.session.userId = user._id;
           
           return res.redirect('/');
        }
        else{
           return res.redirect('/auth/login');
        }
    }
    else{
      
        return res.redirect('/auth/login');
    }
}