const transporter = require("../configs/nodemailer");
require("dotenv").config();

const { GOOGLE_MAIL_USER } = process.env;

const sendEmailControllers = {
  postSendEmail: async (req, res) => {
    const { email, subject, message, fullName } = req.body;
    const mailOptions = {
      from: GOOGLE_MAIL_USER,
      to: GOOGLE_MAIL_USER,
      subject: `${fullName} - ${subject}`,
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
    res.redirect("/");
  },
};

module.exports = sendEmailControllers;
