const transporter = require("../configs/nodemailer");
require("dotenv").config();
const axios = require("axios");

const { GOOGLE_MAIL_USER, RECAPTCHA_SECRET_KEY } = process.env;

const sendEmailControllers = {
  postSendEmail: async (req, res) => {
    const { email, subject, message, fullName } = req.body;
    const recaptchaResponse = req.body["g-recaptcha-response"];

    if (!recaptchaResponse) {
      req.session.errorMessage = "Veuillez compléter le CAPTCHA";
      req.session.formData = req.body;
      return res.redirect("/#contacts");
    }

    try {
      const verification = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: recaptchaResponse,
          remoteip: req.ip,
        },
      });

      if (!verification.data.success) {
        req.session.errorMessage = "CAPTCHA invalide, veuillez réessayer";
        req.session.formData = req.body;
        return res.redirect("/#contacts");
      }

      const mailOptions = {
        from: GOOGLE_MAIL_USER,
        to: GOOGLE_MAIL_USER,
        subject: `${fullName} - ${subject}`,
        replyTo: email,
        html: `
      <div>
        <p>
          <b>Nom: ${fullName}<br></b>
          <b>Email: ${email}<br /></b>
          <b>Sujet: ${subject}<br /></b>
          <br />
          ${message}
        </p>
      </div>
    `,
      };
      await transporter.sendMail(mailOptions);
      req.session.successMessage = "Message envoyé avec succès !";
      return res.redirect("/#contacts");
    } catch (error) {
      req.session.errorMessage = "Erreur technique, veuillez réessayer";
      req.session.formData = req.body;
      return res.redirect("/#contacts");
    }
  },
};

module.exports = sendEmailControllers;
