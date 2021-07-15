const nodemailer = require('nodemailer');

export default function (req, res) {
  console.log(req.body);
  const {
    ContactContent,
    UserEmail,
    CarDescription,
    ContactPhotos,
    ContactImmat,
    ContactModel,
    ContactBrand,
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
    subject: `${UserEmail} vous à contacté`,
    text: `Message:${ContactContent},
       Description:${CarDescription},
       Photos: ${ContactPhotos[0]},
       Immatriculation: ${ContactImmat},
        Modele:${ContactModel},
        Marque :${ContactBrand}`,
    html: `Message:${ContactContent},</br> Description:${CarDescription},</br> Photos: ${ContactPhotos},</br> Immatriculation: ${ContactImmat},</br> Modele:${ContactModel},</br> Marque :${ContactBrand}`,
    /*
    attachments: [
      {
        filename: `${ContactPhotos[0].name}`,
        href: `${ContactPhotos[0].url}`,
      },
    ],
    */
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}