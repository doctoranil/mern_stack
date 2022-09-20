const mongoose= require('mongoose');
const bcrypt= require('bcryptjs')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});




userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.hashPassword(this.password)
        .then((password) => {
            this.password = password;
           
         
        });

        this.hashPassword(this.cpassword)
        .then((cpassword) => {
            this.cpassword = cpassword;
            next();
          
        });
       

});

userSchema.methods = {
    hashPassword(password) {
        return bcrypt.hash(password, 10);
    },
    hashPassword(cpassword) {
        return bcrypt.hash(cpassword, 10);
    },
}


const User= mongoose.model('USER',userSchema);



module.exports= User;