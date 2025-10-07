import { Request, Response } from 'express';
import { TenantModel } from '../../database/models/Tenant.model';
import { LandlordModel } from '../../database/models/Landlord.model';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()

export const loginController = async (req: Request, res: Response) => {

  const { email, password } = req.body
  const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN!

  try {
    const user = (await TenantModel.findOne({ email })) || (await LandlordModel.findOne({ email }));

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials. Try again.' })
      return
    }

    const isPasswordAMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordAMatch) {
      res.status(401).send({ message: 'Invalid credentials. Try again.' })
      return
    }

    const accessToken = jwt.sign({ email: user.email, userID: user._id, username: user.username }, JWT_ACCESS_TOKEN, { expiresIn: '30d' })

    res.status(200).json({ message: 'Success', accessToken, email, username: user.username, accountType: user.accountType })

  } catch (err) {
    console.log('Could not login', err)
    res.status(500).json({ error: "Could not login" })
  }

}