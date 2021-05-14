import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';

const responseError = {
  error: true,
  message: `Something went wrong. Please try again`,
};

const responseSuccess = {
  error: false,
  message: `Email has been sent. Thanks for your message!`,
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
      res.status(404).json(responseError);
    } else {
      res.status(200).json(responseSuccess);
    }
  });
};
