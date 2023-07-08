const usermodel =require('../models/usermodel')
const jwt =require('jsonwebtoken')

class CreateUser {
    static async RegisterUser(phoneNumber,email,password){
        try{            
        const create =await usermodel.create({phoneNumber,email,password})
        return create;
        }
        catch(err){
            console.log(err);
        }
    }
    
    // static async checkuser(username){
    //     try{
    //         return await usermodel.findOne({email:username},{phoneNumber:username})
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    // static async checkuseremail(email){
    //     try{
    //         return await usermodel.findOne({email})
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    static async checkuserphone(phoneNumber){
        try{
            return await usermodel.findOne({phoneNumber})
        }
        catch(err){
            console.log(err);
        }
    }

    static async generatetoken(tokendata, secretkey){
        try{
            return jwt.sign(tokendata,secretkey, {expiresIn:'1D'})
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports=CreateUser