const express= require('express');
const router= express.Router();
const cities = require('../Model/CitiesModel');

router.post('/Cities/insert', function(req,res){
    const City_name = req.body.City_name;
    const Number_of_Hotel = req.body.Number_of_Hotel;
    const Average_Price = req.body.Average_Price;

    const data = new cities({
        City_name:City_name,
        Number_of_Hotel:Number_of_Hotel,
        Average_Price:Average_Price
    })
    data.save()
    .then(function(result){
        res.status(201).json({success:true, message: "City Hotel Inserted"})
    })
    .catch(function(err){
        res.status(500).json({error:"Error"})
    })

})

module.exports = router;