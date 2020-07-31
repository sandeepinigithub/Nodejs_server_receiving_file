var express = require('express');
const app = express();
var fileupload = require('express-fileupload');

app.use(fileupload());

app.get("/",(req,res,next)=>{
    res.status(200).send("Hello World");
});

app.post("/upload", function(req,res,next){
    console.log(req.files);
    res.send({
        success:true,
        message:"File Uploaded!"
    });
});

app.listen(3000,()=>{
    console.log("Startes on port : 3000")
});
