import { Request, Response } from 'express';
import { TenantModel } from '../../database/models/Tenant.model';
import { LandlordModel } from '../../database/models/Landlord.model';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signupController = async (req: Request, res: Response) => {
  
  const { email, username, address, password, phoneNumber, promo, accountType } = req.body
  const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN!
  
  let hashedPassword: string;
  const saltRounds = 10
  let isExistingUser: any | null = null;
  let newUser: any;

  try {

    if(accountType === 'tenant'){
      isExistingUser = await TenantModel.findOne({ email })
    } else if(accountType === 'landlord'){
      isExistingUser = await LandlordModel.findOne({ email })
    }

    if (isExistingUser) {
      res.status(400).json({ message: 'Email already in use. Please use a different email address.' })
      return
    }

    hashedPassword = await bcrypt.hash(password, saltRounds)
    
    if(accountType === 'tenant'){
      newUser = new TenantModel({
        username,
        email,
        address,
        accountType,
        password: hashedPassword,
        phoneNumber,
        landlordPromo: promo,
      })
    }

    if(accountType === 'landlord'){
      newUser = new LandlordModel({
        username,
        email,
        address,
        accountType,
        password: hashedPassword,
        phoneNumber,
      })
    }

    await newUser.save()

    const accessToken = jwt.sign({ email }, JWT_ACCESS_TOKEN, { expiresIn: '30d' })

    res.status(201).json({ message: 'User Created Successfully', accessToken})
  } catch (err) {
    console.error('Failed to create user', err)
    res.status(500).json({error: 'Failed to create new user'})
  }

}