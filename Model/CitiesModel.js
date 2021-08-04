const mongoose = require('mongoose');

const cities =mongoose.model('Cities',{
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