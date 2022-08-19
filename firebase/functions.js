import { useState } from "react";

const addDocument = async (doc) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState("");
  try {
    const timeCreated = timestamp.fromDate(new Date());
    const documentAdded = await refType.add({ ...doc, timeCreated });

    setDocument(documentAdded);
  } catch (err) {
    console.log(err.message);
    setError("Failed sending the email");
  }

  return { document, error };
};

export { addDocument };
