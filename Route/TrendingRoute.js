const express= require('express');
const router= express.Router();
const trending = require('../Model/TrendingModel');

router.post('/Trending/insert', function(req,res){
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Address = req.body.Address;
    const Price = req.body.Price;

    const data = new trending({
        Hotel_name:Hotel_name,
        Location:Location,
        Address: Address,
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

router.get('/Trending/show', function(req,res){
    console.log(req.body)
    trending.find().then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(201).json({error:e})
    })
})

module.exports = router;