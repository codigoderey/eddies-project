"use client";

import { createContext, useState } from "react";
import firebase from "@/firebase";
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

	const sendEmailCode = (email) => {
		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				window.localStorage.setItem("emailForSignIn", email);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(errorCode);
				console.error(errorMessage);
			});
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
