"use client";
import { createContext, useState } from "react";
import firebase from "@/firebase";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {

  const [candidates, setCandidates] = useState([]);

  const [loading, setLoading] = useState(false);

  const getAllCandidates = async () => {
    try {
      setLoading(true);
      const db = getFirestore(firebase);
      const candidatesCollection = collection(db, "candidates");
      const candidatesSnapshot = await getDocs(candidatesCollection);
      const candidatesList = candidatesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
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
  }
  
  return (
    <FirebaseContext.Provider value={{ 
        getAllCandidates,
        addNewCandidate,
        setLoading,
        candidates,
        loading
     }}>
      {children}
    </FirebaseContext.Provider>
  );
};
