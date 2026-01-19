"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export const postUser = async (data) => {
    console.log(data)

    // 1 - checking if user exists
    const isExist = await dbConnect("users").findOne({email: data.email})

    if(isExist){
        return {
            success: false,
            message: "User already exists"
        }
    }
    
    // 2 - if not, create user and hash password

    const passwordHash = await bcrypt.hash(data.password, 10);

    const newUser = {
        ...data,
        password: passwordHash,
        createdAt: new Date().toISOString()
    }

    // 3 - store user in DB
    const result = await dbConnect("users").insertOne(newUser);

    if(result.acknowledged){
        return {
            success: true,
            message: "User registered successfully"
        }
    } else {
        return {
            success: false,
            message: "Failed to register user"
        }
    }
}