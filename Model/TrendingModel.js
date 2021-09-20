const mongoose = require('mongoose');

const trending =mongoose.model('Trending',{
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
module.exports=trending;