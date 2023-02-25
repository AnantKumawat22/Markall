// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  const data = JSON.parse(req.body);
  console.log(data);
  if(data.name == "" || data.email == "" || data.phnumber == "" || data.message == ""){
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  try {
    const response = await transporter.sendMail({
      ...mailOptions,
      to: data.email,
      subject: "Markall user contact",
      html: `<p>${data.message}</p>`
    }, (err, info) => {
      if (err) {
          console.error(err);
          reject(err);
      } else {
          console.log(info);
          resolve(info);
      });
    return res.status(200).json({ msg: 'Email Sent Successfully.' });
  } catch (error) {
    return res.status(400).json({ error: data, msg: error.message });
  }

  return res.status(400).json({ msg: 'Bad Request' });
}

export default handler;