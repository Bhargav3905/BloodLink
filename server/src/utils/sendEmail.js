import nodemailer from "nodemailer";
import ApiError from "./ApiError.js";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"BloodLink" <${process.env.MAIL_FROM}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error(error);
    throw new ApiError(500, "Failed to send email");
  }
};

export default sendEmail;
