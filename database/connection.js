const express = require('express');
const app = new express();
const mongoose = require('mongoose');

const dburl = "mongodb+srv://nitin:123@cluster0.xzu26ki.mongodb.net/BLOG?retryWrites=true&w=majority";

const connectdb = async ()=>{
    try{
        await mongoose.connect(dburl);
        console.log("database connected successfully");
    }

    catch(err){
        console.log("database connection failed",err);
    }
}

connectdb();
module.exports = connectdb;