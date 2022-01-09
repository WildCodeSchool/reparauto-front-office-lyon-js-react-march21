const nodemailer = require('nodemailer');

export default (req, res) => {
  const {
    appointmentsUserName,
    appointmentsEmail,
    brandModel,
    appointmentsImmatriculation,
    appointmentsContent,
    appointmentDate,
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
    to: `${appointmentsEmail},${process.env.SMTP_MAILSENDER}`,
    subject: 'Votre rendez-vous Répar-Automobile est bien enregistré',
    text: `
        Nom, prénom ${appointmentsUserName},</br>
        Email  ${appointmentsEmail},</br>
        Marque et modele  ${brandModel},</br>
        Immatriculation  ${appointmentsImmatriculation},</br>
        Text ${appointmentsContent},</br>
        Date ${appointmentDate},</br>`,

    html: `<h2>Merci d'avoir pris rendez-vous sur Répar'Automobile!!</h2> <br>
    <h4>Bonjour ${appointmentsUserName},<br>
    Vous avez demandé l'intervention suivante ${appointmentsContent} sur votre véhicule ${brandModel}, immatriculé ${appointmentsImmatriculation} le ${appointmentDate}<br>
    Votre demande sera traitée dans les plus brefs délais, et vous recevrez rapidement la confirmation de votre rendez-vous sur cette adresse ${appointmentsEmail}</h4><br><br>
    <h3>A bientôt, et merci de votre confiance</h3>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
};
