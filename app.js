// server/app.js
const mongoose = require('mongoose');
const express = require("express");

const path = require('path'); // no need to install 
const  bodyParser = require('body-parser') 


const connectDB = require('./DB/Traveldb');
const BookingRoute= require('./Route/BookingRoute');
const TrendingRoute= require('./Route/TrendingRoute');

const app = express(); // third party
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'hbs');

const publicDir = path.join(__dirname, 'pictures');
app.use("/pictures",express.static(publicDir));

app.use(BookingRoute);
app.use(TrendingRoute);


app.listen(3001, (err)=> {
    console.log("started at http://localhost:3001/")
})