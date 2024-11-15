"use client";
import nodemailer from "nodemailer";
import { createContext, useState } from "react";
import {
	getAuth,
	sendSignInLinkToEmail,
	isSignInWithEmailLink,
	signInWithEmailLink,
	onAuthStateChanged,
	signOut
} from "firebase/auth";

import baseURL from "@/utils/baseUrl";

export const AuthContext = createContext(null);

export const actionCodeSettings = {
	url: baseURL + "/admin",
	handleCodeInApp: true
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const auth = getAuth();

	const sendEmailCode = async (email) => { 
		try {
			// 1. Generate the email link 
			await sendSignInLinkToEmail(auth, email, actionCodeSettings);
			window.localStorage.setItem("emailForSignIn", email);
	
			// 2. Send the custom email using Nodemailer
			const emailLink = await auth.generateSignInWithEmailLink(email, actionCodeSettings); 
			sendEmailWithNodemailer(email, emailLink); 
	
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode);
			console.error(errorMessage);
		}
	};
	

	const validateSignedUser = () => {
		if (isSignInWithEmailLink(auth, window.location.href)) {

			let email = window.localStorage.getItem("emailForSignIn");

			if (!email) {
				return;
			}

			// The client SDK will parse the code from the link for you.
			signInWithEmailLink(auth, email, window.location.href)
				.then((result) => {
					window.localStorage.removeItem("emailForSignIn");
					setUser(auth.currentUser);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const verifyUserAuthChange = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(auth.currentUser);
				return true;
			}
		});
	};

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const sendEmailWithNodemailer = async (to, link) => {
		// 1. Create a Nodemailer transporter
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
	
		// 2. Define email options
		let mailOptions = {
			from: "4Z Improv <estimates@4zimprov.com>",
			to: to,
			subject: 'Sign in to Your App',
			html: `
				<!DOCTYPE html>
				<html>
				<head>
				  <title>Sign in to 4Z Improv</title>
				</head>
				<body>
				  <h1>Welcome to 4Z Improv</h1>
				  <p>Click the link below to sign in:</p>
				  <a href="${link}">${link}</a>
				</body>
				</html>
			` 
		};
	
		// 3. Send the email
		try {
			let info = await transporter.sendMail(mailOptions);
			console.log("Message sent: %s", info.messageId);
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				sendEmailCode,
				validateSignedUser,
				user,
				verifyUserAuthChange,
				signOutUser
			}}>
			{children}
		</AuthContext.Provider>
	);
};
