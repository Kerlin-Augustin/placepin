import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToDB } from './config/mongoDatabase';
import signupRoute from './routes/auth/signupRoute';
import loginRoute from './routes/auth/loginRoute';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

connectToDB()

// Middleware

app.use(cors())
app.use(express.json())
app.use('/api', signupRoute)
app.use('/api', loginRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})