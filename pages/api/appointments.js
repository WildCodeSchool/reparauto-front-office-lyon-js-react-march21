const nodemailer = require('nodemailer');

export default (req, res) => {
  console.log(req.body);
  console.log(res.body);
  const {
    appointmentsUserName,
    appointmentsEmail,
    brandModel,
    appointmentsImmatriculation,
    appointmentsContent,
    appointmentDate,
    picture,
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
    subject: `${appointmentsEmail}/${appointmentsUserName} vous à contacté`,
    text: `Nom : ${appointmentsUserName},</br>
        Email : ${appointmentsEmail},</br>
        Marque, modèle : ${brandModel},</br>
        Immatriculation : ${appointmentsImmatriculation},</br>
        Contenu : ${appointmentsContent},</br>
        Date : ${appointmentDate},</br>
        Picture : ${picture}`,

    html: `Message:${appointmentsContent},</br> Nom:${appointmentsUserName},</br> Immatriculation: ${appointmentsImmatriculation},</br> Modele:${brandModel},Date : ${appointmentDate},</br> Email :${appointmentsEmail}`,

    attachments: [
      {
        filename: `image.jpg`,
        path: `/public/images/accueil-1.jpg`,
      },
    ],
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
};
