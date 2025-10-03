import { Request, Response } from 'express';
 
export const loginController = async (req: Request, res: Response) => {

const { email, password } = req.body

try{

} catch (err) {
  console.log('Could not login', err)
  res.status(500).json({ error: "Could not login"})
}

}