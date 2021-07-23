const mongoose = require('mongoose');

const client =mongoose.model('Client',{
    client_Username:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    },
    Rooms:{
        type:Number
    },
    Check_in:{
        type:String
    },
    Check_out:{
        type:String
    },
    Guest:{
        type:Number
    }
})
module.exports=client;