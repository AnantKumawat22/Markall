import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    port: 465,
    secure: true,
    providerauth: {user: process.env.EMAIL},
    // auth: {
    //     user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
    // }
});

export const mailOptions = {
    from: process.env.EMAIL,
}