// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  const data = req.body;
  console.log(data);
  if(data.name == "" || data.email == "" || data.phnumber == "" || data.message == ""){
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      to: data.email,
      subject: "Markall user contact",
      html: `<p>${data.message}</p>`
    });
    return res.status(200).json({ msg: 'Email Sent Successfully.' });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }

  return res.status(400).json({ msg: 'Bad Request' });
}

export default handler;