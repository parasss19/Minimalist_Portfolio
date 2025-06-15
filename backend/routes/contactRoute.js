import { Router } from "express";
import { validateUser } from '../middleware/validateUser.js';
import nodemailer from 'nodemailer';

const router = Router();

router.post("/contact" ,validateUser, async(req, res) => {
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

export default router