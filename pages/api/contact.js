// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  const data = req.body;
  console.log(data);

  if(data.name == "" || data.email == "" || data.phnumber == "" || data.message == ""){
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  try {
    // await transporter.sendMail({
    //   ...mailOptions,
    //   to: data.email,
    //   subject: "Markall user contact",
    //   html: `<p>${data.message}</p>`
    // }, (error, info) => {
    //   if (err) {
    //       res.status(400).json({ msg: error });
    //       reject(err);
    //   } else {
    //       res.status(400).json({ msg: info });
    //       resolve(info);
    //   }
    // });

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: `anantkumawat67218@gmail.com`,
        from: `anantkumawat22@gmail.com`,
        subject: `Markall Email`,
        text: `This is test mail.`
    };
    sgMail
    .send(msg)
    .then(() => {
        return res.status(200).json({ msg: 'Email Sent Successfully.' });
    })
    .catch((error) => {
        return res.status(200).json({ msg: error });
    });

    return res.status(200).json({ msg: 'Email Sent Successfully.' });
  } catch (error) {
    return res.status(400).json({ error: data, msg: error.message });
  }
}

export default handler;