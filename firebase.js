import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDUjEfXYNUP81gwgtapP_NwZ4aj4163Gbc",
  authDomain: "stellar-explorers.firebaseapp.com",
  projectId: "stellar-explorers",
  storageBucket: "stellar-explorers.firebasestorage.app",
  messagingSenderId: "693646689771",
  appId: "1:693646689771:web:b20527fd02da21ef31c5ae",
  measurementId: "G-YF0QVSVDRN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
