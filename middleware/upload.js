const multer = require('multer');

const storage=multer.diskStorage({
    destination:function(res,file,cb){
        cb(null,'./Pictures')
    },
    filename:function(res,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
const fileFilter  = function (req,file,cb){
    if(file.mimetype ==='image/jpeg'|| file.mimetype ==="image/png"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}


const upload =multer({
    storage : storage,
    fileFilter: fileFilter
});

module.exports=upload;