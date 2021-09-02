const express= require('express');
const router= express.Router();
const cities = require('../Model/CitiesModel');
const upload=require('../middleware/upload');

router.post('/Cities/insert', upload.single('Image'), function(req,res){
    
    if(req.file==undefined){
        return res.status(400).json({
            message:"Invalid file format"})
    }
    const path=req.file.filename;
    const City_name = req.body.City_name;
    const Number_of_Hotel = req.body.Number_of_Hotel;
    const Average_Price = req.body.Average_Price;

    const data = new cities({
        Image:path,
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

router.get('/cities/show', function(req,res){
    cities.find().then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(201).json({error:e})
    })
})

module.exports = router;