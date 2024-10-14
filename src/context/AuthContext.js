"use client";

import { createContext, useState } from "react";
import firebase from "@/firebase";
import {
	getAuth,
	sendSignInLinkToEmail,
	isSignInWithEmailLink,
	signInWithEmailLink
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

	const sendEmailCode = (email) => {
		try {
		} catch (error) {}
		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				window.localStorage.setItem("emailForSignIn", email);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				// ...
			});
	};

	const validateSignedUser = () => {
		if (isSignInWithEmailLink(auth, window.location.href)) {
			// Additional state parameters can also be passed via URL.
			// This can be used to continue the user's intended action before triggering
			// the sign-in operation.
			// Get the email if available. This should be available if the user completes
			// the flow on the same device where they started it.
			let email = window.localStorage.getItem("emailForSignIn");

			if (!email) {
				// User opened the link on a different device. To prevent session fixation
				// attacks, ask the user to provide the associated email again. For example:
				email = window.prompt("Please provide your email for confirmation");
			}
			// The client SDK will parse the code from the link for you.
			signInWithEmailLink(auth, email, window.location.href)
				.then((result) => {
					// Clear email from storage.
					window.localStorage.removeItem("emailForSignIn");
					// You can access the new user by importing getAdditionalUserInfo
					// and calling it with result:
					// getAdditionalUserInfo(result)
					// You can access the user's profile via:
					setUser(getAdditionalUserInfo(result)?.profile);
					console.log(getAdditionalUserInfo(result)?.profile);
					// You can check if the user is new or existing:
					// getAdditionalUserInfo(result)?.isNewUser
				})
				.catch((error) => {
					// Some error occurred, you can inspect the code: error.code
					// Common errors could be invalid email and invalid or expired OTPs.
				});
		}
	};

	return (
		<AuthContext.Provider value={{ sendEmailCode, validateSignedUser }}>
			{children}
		</AuthContext.Provider>
	);
};
