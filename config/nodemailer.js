import nodemailer from "nodemailer";

export const transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
}