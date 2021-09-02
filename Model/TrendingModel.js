const mongoose = require('mongoose');

const trending =mongoose.model('Trending',{
    Hotel_name:{
        type:String
    },
    Location:{
        type:String
    },
    Address:{
        type:String
    },
    Price:{
        type:Number
    }
})
module.exports=trending;