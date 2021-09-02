const mongoose = require('mongoose');

const featured =mongoose.model('Featured',{
    Image:{
        type:String
    },
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