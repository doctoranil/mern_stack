const dotenv= require("dotenv");
dotenv.config({path:'./config.env'});
const mongoose= require('mongoose');
const express= require('express');
require('./db/conn');
const PORT= process.env.PORT;
const app= express();

app.use(express.json());
app.use(require('./router/auth'));

 const middleware=(req,res,next)=>{
    console.log("Hello my middleware");

    next();
 }


app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`);
});
