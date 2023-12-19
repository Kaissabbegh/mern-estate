import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=> {
    const {username,email,password} = req.body;
    const hashedPW= bcryptjs.hashSync(password,10);
    const newUser = new User({ username,email,password:hashedPW});
    try {
        await newUser.save()
        res.status(201).json("user created succesfully")
    } catch (error) {
        next(errorHandler(500,'error from the function'));
    }
    
}