const mongoose = require('mongoose');

const featured =mongoose.model('Featured',{
    Hotel_name:{
        type:String
    },
    Location:{
        type:String
    },
    Price:{
        type:Number
    }
})
module.exports=featured;