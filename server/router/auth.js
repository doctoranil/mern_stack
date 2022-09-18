const express = require('express');

const router= express.Router();
require('../db/conn');
const User= require('../model/userSchema');


router.get('/',(req,res)=>{
    res.send(`Hello World from the server router`);

});



router.post('/register',(req,res)=>{
 
   
    const {name,email,phone,password,cpassword,work,address}= req.body;

    if(!name|| !email || !phone|| !password|| !cpassword|| !work){
        res.status(422).json({error:"Please filled the field propeerly"});
    }


    User.findOne({email: email}).then(function(result){
    if(result){
        res.status(422).json({error:"Email already exist"});
    }else{
        var new_user = new User({name,email,phone,password,cpassword,work,address});
        new_user.save(function(err,result){
            if(err){
                res.status(500).json({error:"failed to register"});
            }
            else{
                res.status(200).json({message:"user created successfully"});
            }
        })
    }

   }).catch((err)=>{
    res.status(422).json({error:"Something went wrong"});
   });


  



      
   

//     User.find({email:email})
//     .then((userExist)=>{
//         console.log(userExist);
//         if(userExist){
//             res.status(422).json({error:"Email already exist"});
//         }
// const user= new User({name:name,email:email,phone:phone,password:password,cpassword:cpassword,work:work});
// user.save().then(()=>{
//     console.log(helllo);
//     res.status(200).json({message:"user created successfully"});
// }).catch((err)=>{
//     res.status(500).json({error:"failed to register"});
// });

//     }).catch((err)=>{console.log(err)});


   
});

router.get('/contact',(req,res)=>{
    res.send(`Hello World contact page`);

});

router.get('/signin',(req,res)=>{
    res.send(`Hello World sign in page`);

});



module.exports= router;


