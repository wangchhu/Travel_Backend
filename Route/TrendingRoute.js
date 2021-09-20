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
    const path =req.file.path;
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price = req.body.Price;

    const tdata = new trending({
        path:path,
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

router.put('/Trending/update', function(req,res){
    console.log(req.body)
    const id = req.body.id;
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price= req.body.Price;
    trending.updateOne({_id : id},{Hotel_name : Hotel_name,Location : Location, Price: Price}).then(function(){
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})

router.get('/Trending/single/:id', function(req,res){
    const id= req.params.id;
    trending.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})

router.delete('/Trending/delete/:id', function(req,res){
    const id=req.params.id;
    trending.deleteOne({_id: id})
    .then((result)=>{
        res.status(200).json({message:"Deleted"})
    })
    .catch((e)=>{
        res.status(500).json({error:e})
    })
})


module.exports = router;