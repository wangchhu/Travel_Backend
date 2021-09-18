const mongoose = require('mongoose');

const trending =mongoose.model('Trending',{
    path:{
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
module.exports=trending;