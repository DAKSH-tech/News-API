const express=require('express');
const app=express();
const path=require('path');
const dotenv=require('dotenv').config()
const ejs = require('ejs');
const newsroute=require('./routes/news');
const expressLayouts = require('express-ejs-layouts');
//app.use('./views',require('./views'));
//app.use(expressLayouts);
app.set('views', path.join(__dirname+ '/views'))
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/',newsroute);
app.listen(8000,function(err){
    if(err){
        console.log("Server Started");
    }
})