const nodemailer = require('nodemailer');

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: 'maupiedjoris@gmail.com',
    to: 'maupied69@hotmail.com',
    subject: `Message From `,
    text: `Sent from:`,
    html: `<div>Salut</div><p>Sent from:
      </p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
