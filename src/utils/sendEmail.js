import nodemailer from "nodemailer";

export const sendEmail = async (mail, subject, htmlBody) => {
	let transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.MAIL_USER, // generated ethereal user
			pass: process.env.MAIL_PASS // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	let info = await transporter.sendMail({
		from: "4Z Improv <estimates@4zimprov.com>",
		to: mail,
		subject,
		text: "You requested a quote.",
		html: htmlBody
	});

	console.info(`Message sent: ${info.messageId}`);
};
