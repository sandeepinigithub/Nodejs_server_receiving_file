var express = require('express');
const app = express();
var fileupload = require('express-fileupload');

app.use(fileupload());

app.get("/",(req,res,next)=>{
    res.status(200).send("Hello World");
});

app.post("/upload", function(req, res, next) {
    const file = req.files.photo;  //photo is simple key given from client side here we used postman there we gave photo as key.
    file.mv('./uploaded_file/' + file.name, function(err, result) {
     if(err) 
      throw err;
     res.send({
      success: true,
      message: "File uploaded!"
     });
    });
   });

app.listen(3000,()=>{
    console.log("Startes on port : 3000")
});
