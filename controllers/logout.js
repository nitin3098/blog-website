
module.exports = (req,res,next)=>{
    if (req.session.userId) {
        req.session.destroy();
        return res.redirect('/')
    }
}