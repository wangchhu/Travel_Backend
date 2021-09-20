const express= require('express');
const router= express.Router();
const featured = require('../Model/FeaturedModel');
const upload=require('../middleware/upload');

router.post('/Featured/insert',upload.single('Image'), function(req,res){
   
    if(req.file==undefined){
        return res.status(400).json({
            message:"Invalid file format"})
    }

    const path =req.file.path;
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price = req.body.Price;

    const fdata = new featured({
        path:path,
        Hotel_name:Hotel_name,
        Location:Location,
        Price:Price
    })
    fdata.save()
    .then(function(result){
        res.status(201).json({success:true, message: "Featured Hotel Inserted"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })

})

router.get('/Featured/show', function(req,res){
    console.log(req.body)
    featured.find().then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(201).json({error:e})
    })
})


router.put('/Featured/update', function(req,res){
    console.log(req.body)
    const id = req.body.id;
    const Hotel_name = req.body.Hotel_name;
    const Location = req.body.Location;
    const Price= req.body.Price;
    featured.updateOne({_id : id},{Hotel_name : Hotel_name,Location : Location, Price: Price}).then(function(){
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})

router.get('/Featured/single/:id', function(req,res){
    const id= req.params.id;
    featured.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})

router.delete('/Featured/delete/:id', function(req,res){
    const id=req.params.id;
    featured.deleteOne({_id: id})
    .then((result)=>{
        res.status(200).json({message:"Deleted"})
    })
    .catch((e)=>{
        res.status(500).json({error:e})
    })
})


module.exports = router;