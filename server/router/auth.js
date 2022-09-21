const express = require('express');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`Hello World from the server router`);


});


// registration using async await 


router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword, work, address } = req.body;
    if (!name || !email || !phone || !password || !cpassword || !work) {
        res.status(422).json({ error: "Please filled the field propeerly" });
    }

    try {
        const userData = await User.findOne({ email: email });

        if (userData) {
            res.status(422).json({ error: "Email already exist" });
        } else {
            let new_user = new User({ name, email, phone, password, cpassword, work, address });
            const registerRecord = await new_user.save();

            res.status(200).json({ message: "user created successfully" });

        }

    } catch (error) {
        res.status(422).json({ error: error });
    }



});


router.post('/login', async (req, res) => {
console.log(req.body);
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Please filled the field propeerly" });
        }
        const userData = await User.findOne({ email: email });

        if (userData) {
            const cmp = await bcrypt.compare(password, userData.password);

            const token= await userData.generateAuthToken();
            res.cookie("jwtoken",token,{
               expires:new Date(Date.now()+2892000000),
               httpOnly:true
            });
            if (cmp) {
                res.status(200).json({ message: "user Loged In successfully" });
            }else{
                res.status(400).json({ error: "Wrong username or password" });
            }
          
        }else{
            res.status(400).json({ error: "user error" });
        }

    

    } catch (error) {
console.log(error);
    }

});

router.get('/contact', (req, res) => {
    res.send(`Hello World contact page`);
});

router.get('/signin', (req, res) => {
    res.send(`Hello World sign in page`);

});



module.exports = router;


