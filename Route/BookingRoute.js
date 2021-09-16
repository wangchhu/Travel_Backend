const express =require('express');
const router= express.Router();
const client =require('../Model/BookingModel');

router.post('/client/insert', function(req,res){

    console.log(req.body)

        const client_Username = req.body.client_Username;
        const Email = req.body.Email;
        const Phone = req.body.Phone;
        const Rooms = req.body.Rooms;
        const Check_in = req.body.Check_in;
        const Check_out = req.body.Check_out;
        const Guest = req.body.Guest;

        const data = new client ({
            client_Username: client_Username, 
            Email: Email, 
            Phone: Phone,
            Rooms: Rooms,
            Check_in: Check_in,
            Check_out: Check_out,  
            Guest: Guest 
        })
            data.save()
        // const data = new client({client_Username:"Test Name"})
        // data.save()
            .then(function(result){
                res.status(201).json({ success:true,message : "Reservation complete" })
            })
            .catch(function(err){
                res.status(500).json({error : "Error"})
            })  
})
module.exports=router;