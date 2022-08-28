const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    title : {
        type : String,
        
    }
    ,
    description : {
        type: String,
        
    }
    ,
    content : {
        type: String,
        
    },
    username:{
        type: String
    },
    image:{
        type: String,
        default: ""
    }
    ,
    createdAt: {
        type: Date,
        default: new Date()
    }

});


const post = new mongoose.model('posts',postSchema);

module.exports = post;