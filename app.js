// server/app.js
const mongoose = require('mongoose');
const express = require("express");

const connectDB=require("./DB/Traveldb");
const BookingRoute= require('./Route/BookingRoute');




const app = express();
app.use(BookingRoute);
// app.get("/api", (req, res) => {
//   res.json({ message: "This is wangchhu!" });
// });

app.listen(3001);