const mongoose = require('mongoose');

const client =mongoose.model('Client',{
    client_Username:{
        type:String,
        required: true  
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String
    },
    Rooms:{
        type:Number
    },
    Check_in:{
        type:String,
        required:true
    },
    Check_out:{
        type:String,
        required:true
    },
    Guest:{
        type:Number
    }
})
module.exports=client;