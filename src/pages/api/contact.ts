import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';
import { ContactResponse } from '@/types/api/contactResponse.interface';

const responseError: ContactResponse = {
  success: false,
};

const responseSuccess: ContactResponse = {
  success: true,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body;

  const transporter: Transporter = nodemailer.createTransport({
    host: `smtp.office365.com`,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: false,
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Message From Trojnacki.dev`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from:
        ${email}</p>`,
  };

  transporter.sendMail(mailData, (err) => {
    if (err) {
      return res.status(404).json(responseError);
    }
    return res.status(200).json(responseSuccess);
  });
};
