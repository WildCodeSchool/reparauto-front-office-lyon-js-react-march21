const nodemailer = require('nodemailer');

export default function (req, res) {
  console.log(req.body);
  console.log(res.body);
  const {
    ContactContent,
    UserEmail,
    CarDescription,
    // ContactPhotos,
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
    text: `Message:${ContactContent},</br>
       Description:${CarDescription},
       Immatriculation: ${ContactImmat},
        Modele:${ContactModel},
        Marque :${ContactBrand}`,
    html: `Message:${ContactContent},</br> Description:${CarDescription},</br> Immatriculation: ${ContactImmat},</br> Modele:${ContactModel},</br> Marque :${ContactBrand}`,
    /*
    attachments: [
      {
        filename: `image.jpg`,
        path: `/public/images/accueil-1.jpg`,
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
