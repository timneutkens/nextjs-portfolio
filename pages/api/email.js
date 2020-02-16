import nodemailer from "nodemailer";


const emailPass = 'Brianbaw1!';

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.de",
  port: 25,
  auth: {
    user: 'brianbawuah96@gmail.com',
    pass: emailPass
  }
})

export default async (req, res) => {
  const {senderMail, name, content, recipientMail} = req.body;

  console.log(req.body);
}







