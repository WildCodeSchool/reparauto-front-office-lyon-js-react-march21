const nodemailer = require('nodemailer');
const fs = require('fs');

export default (req, res) => {
  console.log(req.body);
  console.log(res.body);
  const {
    contactContent,
    contactUserName,
    contactEmail,
    ContactPhotos,
    contactImmat,
    contactBrandModel,
  } = req.body;
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
      secure: true,
    },
  });
  const mailData = {
    from: process.env.SMTP_MAILSENDER,
    to: process.env.SMTP_MAILRECEIVER,
    subject: `${contactUserName} / ${contactEmail} vous à contacté`,
    text: `Message:${contactContent},</br>
       Nom Prénom:${contactUserName},
       Immatriculation: ${contactImmat},
        Modele:${contactBrandModel},
        Email : ${contactEmail}`,
    html: `Message: ${contactContent}, </br>  Nom Prénom: ${contactUserName}, </br> Immatriculation: ${contactImmat}, </br> Modele: ${contactBrandModel}, </br> Email : ${contactEmail}`,

    attachments: [
      {
        filename: 'test.log',
        content: fs.createReadStream('./test.log'),
      },
      {
        filename: `${ContactPhotos[0].filename}`,
        content: fs.createReadStream(`${ContactPhotos[0].path}`),
      },
    ],
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
};
