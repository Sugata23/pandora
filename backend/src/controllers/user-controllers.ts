import User from "../models/User.js";
import { NextFunction, Request, Response } from "express";

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
    }
};