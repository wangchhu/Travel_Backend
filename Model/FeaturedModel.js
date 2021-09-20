const mongoose = require('mongoose');

const featured =mongoose.model('Featured',{
    path:{
        type:String,
        required:true
    },
    Hotel_name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
})
module.exports=featured;