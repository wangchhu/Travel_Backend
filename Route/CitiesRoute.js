const express= require('express');
const router= express.Router();
const cities = require('../Model/CitiesModel');
const upload=require('../middleware/upload');

router.post('/Cities/insert', upload.single('Image'), function(req,res){
    
    if(req.file==undefined){
        return res.status(400).json({
            message:"Invalid file format"})
    }
    const path=req.file.path;
    const City_name = req.body.City_name;
    const Number_of_Hotel = req.body.Number_of_Hotel;
    const Average_Price = req.body.Average_Price;

    const data = new cities({
        path:path,
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

router.put('/cities/update', function(req,res){
    console.log(req.body)
    const id = req.body.id;
    const City_name = req.body.City_name;
    const Number_of_Hotel = req.body.Number_of_Hotel;
    const Average_Price= req.body.Average_Price;
    cities.updateOne({_id : id},{City_name : City_name,Number_of_Hotel : Number_of_Hotel, Average_Price: Average_Price}).then(function(){
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})

router.get('/cities/single/:id', function(req,res){
    const id= req.params.id;
    cities.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})

router.delete('/cities/delete/:id', function(req,res){
    const id=req.params.id;
    cities.deleteOne({_id: id})
    .then((result)=>{
        res.status(200).json({message:"Deleted"})
    })
    .catch((e)=>{
        res.status(500).json({error:e})
    })
})


module.exports = router;