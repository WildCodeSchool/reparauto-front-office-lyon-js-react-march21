export default function (req, res) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_HOST,
    host: 'smtp.gmail.com',
    auth: {
      user: 'demo email',
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: 'demo email',
    to: 'your email',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
