import { Request, Response } from 'express';
import { UserModel } from '../../database/models/User.model';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signupController = async (req: Request, res: Response) => {
  
  const { email, username, password, accountType } = req.body
  
  let hashedPassword: string;
  const saltRounds = 10

  try {
    const isExistingUser = await UserModel.findOne({ email })

    if (isExistingUser) {
      res.status(400).json({ message: 'Email already in use. Please use a different email address.' })
      return
    }

    hashedPassword = await bcrypt.hash(password, saltRounds)
    
    let newUser = new UserModel({
      username,
      email,
      accountType,
      password: hashedPassword,
    })

    await newUser.save()

    res.status(201).json({ message: 'User Created Successfully'})
  } catch (err) {
    console.error('Failed to create user', err)
    res.status(500).json({error: 'Failed to create new user'})
  }

}