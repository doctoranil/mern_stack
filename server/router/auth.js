const express = require('express');

const router= express.Router();

router.get('/',(req,res)=>{
    res.send(`Hello World from the server router`);

});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send(`registration page`);
});


module.exports= router;


