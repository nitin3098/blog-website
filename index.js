
const {engine} = require('express-edge');
const express = require('express');
require('./database/connection');
const session = require('express-session');
const bodyparser = require('body-parser');
var MongoDBStore = require('connect-mongodb-session')(session);

const edge = require("edge.js");

const dburl = "mongodb+srv://nitin:123@cluster0.xzu26ki.mongodb.net/BLOG?retryWrites=true&w=majority";





const home = require('./postconroller/home');
const postcreatepage  = require('./postconroller/postcreate');
const getpostbyid = require('./postconroller/getpostbyid');
const postsave = require("./postconroller/savepost");


const createuser = require('./controllers/createuser');
const registeruser = require('./controllers/registeruser');
const login = require('./controllers/login');
const loginuser = require('./controllers/loginuser');
const redirectifregistered = require('./authentication/redirectifregistered');

const auth =require('./authentication/auth')

const logout = require('./controllers/logout');
const  Router  = require('./postconroller/savepost');


const app = new express();



var store = new MongoDBStore({
    uri: dburl,
    collection: 'mySessions'
  });


  

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: store
}))
app.use(express.static('public'));

app.use(engine);
app.set('views',__dirname+'/views');


app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
});



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));







app.get('/auth/login',redirectifregistered,login);
app.get('/auth/register',redirectifregistered,createuser);
app.post('/users/register',redirectifregistered,registeruser);
app.post('/users/login',redirectifregistered,loginuser);
app.get('/auth/logout',logout);



//routes controll
app.use(Router);
app.get('/',home);

app.get('/post/create',auth,postcreatepage);
//app.post('/post/store',auth,postsave);

app.get('/post/:id',getpostbyid);



app.listen(4000, ()=>{
    console.log("server is running");
})




//http://localhost:4000/