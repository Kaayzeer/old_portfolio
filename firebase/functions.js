import { useState } from "react";
import { db } from "./firebaseSetup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const useNewDocument = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const addDocument = async (name, email, phone, textArea) => {
    try {
      setError(null);
      const addDocument = collection(db, "emails");

      await addDoc(addDocument, {
        name: name,
        email: email,
        phone: phone,
        textArea: textArea,
        created: serverTimestamp(),
      });

      setMessage("Congratulations, you have now successfully sent your info.");
    } catch (err) {
      console.log(err.message);
      setError("An error ocurred while sending the form information");
    }
  };

  return { addDocument, message, error };
};
