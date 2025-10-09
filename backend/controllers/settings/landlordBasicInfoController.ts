import { type Request, type Response } from "express";
import jwt from 'jsonwebtoken';

export const landlordBasicInfoController = async (req: Request, res: Response) => {
  console.log(req.params.id)
  console.log(jwt)
  res.status(200).json({ message: 'hello', test: 'test'})
}