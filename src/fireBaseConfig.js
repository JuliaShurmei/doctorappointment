import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDmC2jijE1qnTOSKwReswwvkehuqzfiKFQ",
  authDomain: "stay-healthy-e6519.firebaseapp.com",
  projectId: "stay-healthy-e6519",
  storageBucket: "stay-healthy-e6519.appspot.com",
  messagingSenderId: "217885858550",
  appId: "1:217885858550:web:a1de3377bec58c3ba16ad7",
  measurementId: "G-QJTDDDK1KC"
};


const app = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(app);

export default firestoreDatabase;
