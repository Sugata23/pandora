import User from "../models/User.js";
import { NextFunction, Request, Response } from "express";
import { compare, hash } from "bcrypt";

export const getAllUsers = async (
    req:Request, 
    res:Response, 
    next:NextFunction
) => {
    try {
        //get all users
        const users = await User.find();
        return res.status(200).json({message: "OK", users});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error", cause: error});
    }
};

export const userSignup = async (
    req:Request, 
    res:Response, 
    next:NextFunction
) => {
    try {
        //users signup
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 12);
        const users = new User({ name, email, password: hashedPassword });
        await users.save();
        return res.status(200).json({message: "OK", id: users._id.toString()});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error", cause: error});
    }
};