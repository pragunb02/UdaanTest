const express=require('express')

const {bookClass}=require('../controller/bookingController');


const router=express.Router();

router.post('/',bookClass);

module.exports=router;