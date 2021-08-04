const express= require('express');
const router= express.Router();
const featured = require('../Model/FeaturedModel');

router.post('/Featured/insert', function(req,res){
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price = req.body.Price;

    const data = new featured({
        Hotel_name:Hotel_name,
        Location:Location,
        Price:Price
    })
    data.save()
    .then(function(result){
        res.status(201).json({success:true, message: "Featured Hotel Inserted"})
    })
    .catch(function(err){
        res.status(500).json({error:"Error"})
    })

})

module.exports = router;