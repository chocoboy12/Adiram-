const { sendMail } = require("../util/mailer");

class EmailService {
    constructor() {
    }
  
    /**
     * Envoie une notification de test
     */
    async sendtest(Data) {
      // console.log(Data.data.email)
      try {
        // Notification à l'utilisateur
        await sendMail({
          to: `${process.env.MAIL_USER}`,
          subject: "Nouveau message de contact ADIRAM",
          html: `
            <div>
              <h2>Contact Form Submission</h2>

              <p><strong>Nom:</strong> ${Data.data.nom}</p>
              <p><strong>Email:</strong> ${Data.data.email}</p>
              <p><strong>Message:</strong><br>
                ${Data.data.message}
              </p>

              <p>
                <a href="mailto:${Data.data.email}">Répondre</a>
              </p>
            </div>
          `,
        });
        console.log("success")
      } catch (error) {
        console.error("Erreur envoi notifications test", {
          error: error.message,
        });
      }
    }
}

module.exports = new EmailService();