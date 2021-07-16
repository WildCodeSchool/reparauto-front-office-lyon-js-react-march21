const nodemailer = require('nodemailer');

export default function (req, res) {
  console.log(req.body);
  console.log(res.body);
  const {
    Brand,
    Model,
    AppointmentDate,
    AppointmentsEmail,
    AppointmentsName,
    AppointmentsContent,
    AppointmentsImmatriculation,
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
    subject: `${AppointmentsEmail}/${AppointmentsName} vous à contacté`,
    text: `Message:${AppointmentsContent},</br>
       Immatriculation: ${AppointmentsImmatriculation},
        Modele:${Model},
        Marque :${Brand},
        Date : ${AppointmentDate}`,

    html: `Message:${AppointmentsContent},</br> Nom:${AppointmentsName},</br> Immatriculation: ${AppointmentsImmatriculation},</br> Modele:${Model},Date : ${AppointmentDate},</br> Marque :${Brand}`,
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