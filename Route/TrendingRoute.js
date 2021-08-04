const express= require('express');
const router= express.Router();
const trending = require('../Model/TrendingModel');

router.post('/Trending/insert', function(req,res){
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price = req.body.Price;

    const data = new trending({
        Hotel_name:Hotel_name,
        Location:Location,
        Price:Price
    })
    data.save()
    .then(function(result){
        res.status(201).json({success:true, message: "Trending Hotel Inserted"})
    })
    .catch(function(err){
        res.status(500).json({error:"Error"})
    })

})

module.exports = router;