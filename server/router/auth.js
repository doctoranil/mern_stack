const express = require('express');

const router= express.Router();

router.get('/',(req,res)=>{
    res.send(`Hello World from the server router`);

});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send(`registration page`);
});

router.get('/contact',(req,res)=>{
    res.send(`Hello World contact page`);

});

router.get('/signin',(req,res)=>{
    res.send(`Hello World sign in page`);

});



module.exports= router;


