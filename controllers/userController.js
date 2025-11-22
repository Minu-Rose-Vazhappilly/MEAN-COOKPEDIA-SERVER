const users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User Already exists...Please Login...")

        }else{
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encryptedPassword,profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(500).json(err)
    }
    
}

exports.loginController = async(req,res)=>{
    console.log('loginController');
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            let isUserLoggedin = existingUser.role=="user" ? await bcrypt.compare(password,existingUser.password) : password=existingUser.password
            if(isUserLoggedin){
                const token = jwt.sign({email,role:existingUser.role},process.env.JWTSECRET)
                res.status(200).json({user:existingUser,token})

            }else{
                res.status(404).json("Invalid Email/Password....")

            }

        }else{
            res.status(404).json('Inavlid Email....Please Register')
        }

    }catch(err){
        //console.log(err);
        
        res.status(500).json(err)
    }
    
}