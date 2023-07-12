const service = require('../services/userservice')
const bcrypt= require('bcrypt') 

const Register=async(req,res)=>{
    try{
        const {phoneNumber,email,password}= req.body;
        const user= await service.RegisterUser(phoneNumber,email,password)
        res.json(user)
    }
    catch(err){
        console.log(err);
    }
}

const Login=async(req,res)=>{
    try{
        const {phoneNumber,password}= req.body
        const user= await service.checkuserphone(phoneNumber)
        if(!user){
            throw new Error("user not found")
        }

        const isMatch= await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error("invalid password")
        }

        let tokenData = {
            id: user._id,
            phoneNumber: user.phoneNumber
        }

        const token = await service.generatetoken(tokenData, 'secretkey');
        res.status(200).json({
            status: true,
            token: token
        })
    }
    catch(err){
        console.log(err)
    }
}
// const Login=async(req,res)=>{
//     try{
//         const {username,password}= req.body
//         if (username===Number){
//             const phoneNumber =username;
//             const user = await service.che
//             ckuserpn(phoneNumber);
//                 if(!user){
//                     throw new Error("phonenumber not found")
//                 }
            
//         }
//         else
//         {
//            const email =username;
//            const users = await service.checkuseremail(email);
//                 if(!users){
//                         throw new Error("user not found")
//                     }
//         }
        
//         const isMatch= await bcrypt.compare(password, user.password)
//         if(!isMatch){
//             throw new Error("invalid password")
//         }

//         let tokenData = {
//             id: user._id,
//             data: "data"
//         }

//         const token = await service.generatetoken(tokenData, 'secretkey');
//         res.status(200).json({
//             status: true,
//             token: token
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
//}

module.exports={Register,Login}