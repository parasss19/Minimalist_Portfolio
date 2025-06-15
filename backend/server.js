import express from 'express';
import nodemailer from 'nodemailer';
import cors from "cors";
import 'dotenv/config';
import { validateUser } from './middleware/validateUser.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Route - /api/contact
app.post("/contact" ,validateUser, async(req, res) => {
    const { name, email, message } = req.validatedData;

    try {
      // Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.SMTP_USER,
          pass:process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from:process.env.SMTP_USER, 
        to: process.env.MAIL_USER,
        subject: 'New Contact Message from Portfolio' ,
        replyTo: email,
        text: message,
        html: `
          <p><strong>From:</strong>${email}</p>
          <p><strong>Name:</strong>${name}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p> `
       }

      //Send the emai
      await transporter.sendMail(mailOptions);
        
      res.status(200).json({success:true, message: 'Message Sent 🎉' });
    } 
    catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Email failed to send' });
    }
})

app.listen(PORT, () => {
    console.log(`Listen on : ${PORT}`);
})