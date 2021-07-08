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
    },
  });
  const mailData = {
    from: 'joris-maupied_student2021@wilder.school',
    to: 'reparautomobilemail@gmail.com',
    subject: `${UserEmail} vous à contacté`,
    text: `Message:${ContactContent},
       Description:${CarDescription},
       Photos: ${ContactPhotos},
       Immatriculation: ${ContactImmat},
        Modele:${ContactModel},
        Marque :${ContactBrand}`,
    html: `Message:${ContactContent},</br> Description:${CarDescription},</br> Photos: ${ContactPhotos},</br> Immatriculation: ${ContactImmat},</br> Modele:${ContactModel},</br> Marque :${ContactBrand}`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
