
const dotenv= require("dotenv");
dotenv.config({path:'./config.env'});
const mongoose= require('mongoose');

const DB= process.env.DATABASE;

mongoose.connect(DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log("connection successfulll");
}).catch((err)=>{
    console.log(err);
});
