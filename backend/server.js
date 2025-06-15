import express from 'express';
// import nodemailer from 'nodemailer';
import cors from "cors";
import 'dotenv/config';
import contactRouter from './routes/contactRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//handling contact route
app.use('/api' , contactRouter);

app.listen(PORT, () => {
  console.log(`Listen on : ${PORT}`);
})