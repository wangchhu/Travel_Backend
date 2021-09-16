// server/app.js
const mongoose = require('mongoose');
const express = require("express");

const path = require('path'); // no need to install 
const  bodyParser = require('body-parser') 
// const cors=require('cors');

const connectDB = require('./DB/Traveldb');
const BookingRoute= require('./Route/BookingRoute');
const TrendingRoute= require('./Route/TrendingRoute');
const FeaturedRoute = require('./Route/FeaturedRoute');
const CitiesRoute = require('./Route/CitiesRoute');

const router= express.Router();

const app = express(); // third party
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content_Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.set('view engine', 'hbs');

const publicDir = path.join(__dirname, 'pictures');
app.use("/pictures",express.static(publicDir));

// app.use(cors);

// router.post('/client/insert', function(req,res){
//     console.log(req.body)
// })
    
app.use(BookingRoute);
app.use(TrendingRoute);
app.use(FeaturedRoute);
app.use(CitiesRoute);


app.listen(3001, (err)=> {
    console.log("started at http://localhost:3001/")
})