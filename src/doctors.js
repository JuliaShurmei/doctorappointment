import { addDoc, collection } from "firebase/firestore";
import firestoreDatabase from "./fireBaseConfig";

export const AddDoctor = async (payload) => {
    try {
        await addDoc(collection( firestoreDatabase, "doctors"), payload);
        return {
            success: true,
            message: "Doctor added successfully, please wait for approval",
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};