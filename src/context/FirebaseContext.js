"use client";
import { createContext, useState } from "react";
import firebase from "@/firebase";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// get cloud storage from firebase
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL
} from "firebase/storage";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
	// images and documents storage
	const storage = getStorage(firebase, "gs://eddies-ed7ea.appspot.com");

	// candidates list
	const [candidates, setCandidates] = useState([]);

	const [singleCandidate, setSingleCandidate] = useState(null);

	const [loading, setLoading] = useState(false);

	const getAllCandidates = async () => {
		try {
			setLoading(true);
			const db = getFirestore(firebase);
			const candidatesCollection = collection(db, "candidates");
			const candidatesSnapshot = await getDocs(candidatesCollection);
			const candidatesList = candidatesSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			setCandidates(candidatesList);
		} catch (error) {
			console.error("Error getting documents: ", error);
		} finally {
			setLoading(false);
		}
	};

	const addNewCandidate = async (newCandidate) => {
		try {
			setLoading(true);
			const db = getFirestore(firebase);
			const candidatesCollection = collection(db, "candidates");
			await addDoc(candidatesCollection, newCandidate);
		} catch (error) {
			console.error("Error adding document: ", error);
		} finally {
			setLoading(false);
		}
	};

	const uploadFileAndGetDownloadURL = async (file, fileType) => {
		const storageRef = ref(
			storage,
			`/${fileType}/${file.name + "-" + Math.floor(Math.random() * 1000000)}`
		);
		const uploadTask = await uploadBytesResumable(storageRef, file);

		try {
			// Use await to get the download URL
			const downloadURL = await getDownloadURL(uploadTask.ref);

			return downloadURL;
		} catch (error) {
			console.log("Error getting download URL: ", error);
			// Handle the error appropriately (e.g., return null or throw an error)
			return null;
		}
	};

	const addShowCaseImageData = async (imageData) => {
		try {
			setLoading(true);
			const db = getFirestore(firebase);
			const candidatesCollection = collection(db, "documents");
			await addDoc(candidatesCollection, imageData);
		} catch (error) {
			console.error("Error adding document: ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<FirebaseContext.Provider
			value={{
				getAllCandidates,
				addNewCandidate,
				setLoading,
				candidates,
				loading,
				uploadFileAndGetDownloadURL,
				addShowCaseImageData
			}}>
			{children}
		</FirebaseContext.Provider>
	);
};
