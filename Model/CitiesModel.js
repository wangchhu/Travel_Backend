const mongoose = require('mongoose');

const cities =mongoose.model('Cities',{
    path:{
        type:String
    },
    City_name:{
        type:String
    },
    Number_of_Hotel:{
        type:Number
    },
    Average_Price:{
        type:Number
    }
})
module.exports=cities;