const mongoose = require('mongoose');

const cities =mongoose.model('Cities',{
    path:{
        type:String,
        required:true
    },
    City_name:{
        type:String,
        required:true
    },
    Number_of_Hotel:{
        type:Number
    },
    Average_Price:{
        type:Number,
        required:true
    }
})
module.exports=cities;