const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');
const User = require('../models/user');

router.post('/signup', authController.signup)
router.post('/google', authController.google)
router.post('/signin', authController.signin);
router.post('/verifyToken', authController.verifyToken);
router.get('/get',async(req,res)=>{
    try{
        const data=await User.find();
        res.json({data});
    }
    catch{
        
    }
})
module.exports = router; 