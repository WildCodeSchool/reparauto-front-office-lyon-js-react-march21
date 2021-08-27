import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';

const nodemailer = require('nodemailer');

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  console.log(res.body);
  const {
    appointmentsUserName,
    appointmentsEmail,
    brandModel,
    appointmentsImmatriculation,
    appointmentsContent,
    appointmentDate,
    appointmentsPhotos,
  } = req.body;
  req.file = appointmentsPhotos;
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
       Email : ${appointmentsEmail},
        Marque, modèle : ${brandModel},
        Immatriculation : ${appointmentsImmatriculation},
        Contenu : ${appointmentsContent},
        Date : ${appointmentDate}
        Photos: ${appointmentsPhotos}`,

    html: `Message:${appointmentsContent},</br> Nom:${appointmentsUserName},</br> Immatriculation: ${appointmentsImmatriculation},</br> Modele:${brandModel},Date : ${appointmentDate},</br> Email :${appointmentsEmail}`,
    attachments: [
      {
        filename: `image.jpg`,
        content: req.file,
      },
    ],
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
