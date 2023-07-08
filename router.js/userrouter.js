const controller =require('../controller/usercontroller')
const twiliocont = require('../controller/twiliocontroller')
const e=require('express')
const router= e.Router();

router.post('/register',controller.Register)
router.post('/login',controller.Login)

router.post('/sendotp', twiliocont.SendOTP)

module.exports= router