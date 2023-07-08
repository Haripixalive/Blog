const accountSid = 'AC9202e42e2ac962c60f6d823db60f0a8a';
const authToken = 'f0adfa2d58f8dd348c739d025ad56422';
const client = require('twilio')(accountSid, authToken);
function generateOTP(length) {
    const digits = '0123456789'
    let OTP = ''
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP
  }
  
const otp =generateOTP(4)

const SendOTP = (req,res) => {
    try {
        const { recipientNumber } = req.body
        client.messages
        .create({
            body: `Your OTP is: ${otp}`,
            from: '+15734982963',
            to: recipientNumber
        })
        res.json({
            status: true,
            OTP: otp
        })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = {SendOTP}