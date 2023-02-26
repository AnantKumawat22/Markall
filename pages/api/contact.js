// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  const data = req.body;

  if(data.name == "" || data.email == "" || data.phnumber == "" || data.message == ""){
    return res.status(400).json({ msg: 'All fields are required.', success: "danger" });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      to: data.email,
      subject: "Markall User Contact",
      html: `<h1>Markall</h1>
            <h4>Name: ${data.name}.</h4>
            <h4>Phone Number: ${data.phnumber}.</h4>
            <p>${data.message}</p>`
    });

    return res.status(200).json({ msg: 'Email Sent Successfully.', success: "success" });
  } catch (error) {
    return res.status(400).json({ msg: "Couldn't Send Email. Try after sometime.", success: "danger" });
  }
}

export default handler;