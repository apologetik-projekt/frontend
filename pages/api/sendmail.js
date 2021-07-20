import nodemailer from 'nodemailer'

async function validateHuman(token){
	const secret = process.env.RECAPTCHA_SECRET_KEY
	const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, { method: "POST"})
	const data = await response.json()
	return data.success
}

export default async function sendMail(req, res){

	const human = await validateHuman(req.body.token)
	if (!human) {
		res.status(400)
		res.json({ errors: ["Bot detected", req.body.token]})
		return
	}
	
	let testAccount = await nodemailer.createTestAccount();
	
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    secure: (process.env.MAIL_PORT == "465") ? true : false,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"${req.body.name}" <admin@apologetik-channel.de>`,
    to: process.env.CONTACT_FORM_MAIL,
		replyTo: req.body.email,
    subject: "Nachricht vom Kontaktformular",
    text: req.body.message,
    html: req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
  });

	if (process.env.NODE_ENV=="dev") {
		console.log("Message sent: %s", info.messageId);
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		res.status(200).json({
			success: true,
			url: nodemailer.getTestMessageUrl(info)
		})
	} else {
		res.status(200).json({ success: true })
	}
  
  res.end()
}