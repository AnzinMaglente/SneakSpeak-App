const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/users.model')

// Sign up Authentication
router.route('/signin').post(async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(user){
            return res.status(400).json({
                message: 'User already exists.',
                success: false
            })
        }       
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).send({
            message: 'User created successfully!',
            success: true
        });

    }catch(err){
        res.status(500).json({ message: err.message, success: false });
    }
})

// Login Authentication
router.route('/login').post(async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email}).select('+password');

        if(!user){
            return res.status(404).json({ message: 'User does not exist', success: false });
        }

        const isvalid = await bcrypt.compare(req.body.password, user.password);
        if(!isvalid){
            return res.status(401).json({ message: 'Invalid password', success: false });
        }

        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "3d"});

        res.status(200).json({ message: 'User logged in successfully', success: true, token });

    }catch(err){
        res.status(500).json({ message: err.message, success: false });
    }
});

module.exports = router;