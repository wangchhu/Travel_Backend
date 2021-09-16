const express= require('express');
const router= express.Router();
const trending = require('../Model/TrendingModel');
const upload=require('../middleware/upload');

router.post('/Trending/insert', upload.single('Image'), function(req,res){
    if (req.file==undefined){
        return res.status(400).json({
            message:"Invalid file format"
        })
    }
    const path =req.file.filename;
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price = req.body.Price;

    const tdata = new trending({
        Image:path,
        Hotel_name:Hotel_name,
        Location:Location,
        Price:Price
    })
    tdata.save()
    .then(function(result){
        res.status(201).json({success:true, message: "Trending Hotel Inserted"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })

})

router.get('/Trending/show', function(req,res){
    console.log(req.body)
    trending.find().then(function(data){
        res.status(200).json({success:true, data})
    })
    .catch(function(e){
        res.status(201).json({error:e})
    })
})

module.exports = router;