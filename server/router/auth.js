const express = require('express');

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
        res.status(422).json({ error: "Something went wrong" });
    }







});



router.get('/contact', (req, res) => {
    res.send(`Hello World contact page`);

});

router.get('/signin', (req, res) => {
    res.send(`Hello World sign in page`);

});



module.exports = router;


