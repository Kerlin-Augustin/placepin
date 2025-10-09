import { type Request, type Response } from "express"

export const landlordBasicInfoController = async (req: Request, res: Response) => {
  console.log(req.params.id)
  res.status(200).json({ message: 'hello', test: 'test'})
}