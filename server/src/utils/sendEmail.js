import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

const sendEmail = async ({ to, subject, html }) => {
  await brevo.transactionalEmails.sendTransacEmail({
    sender: {
      name: "BloodLink",
      email: process.env.MAIL_FROM,
    },

    to: [
      {
        email: to,
      },
    ],

    subject,

    htmlContent: html,
  });
};

export default sendEmail;
