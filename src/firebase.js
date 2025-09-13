// Import only what you need from Firebase v9+
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aXHppr-IO8UmITBOwlVvezQp6CbBfuk",
  authDomain: "divine-energy-hub.firebaseapp.com",
  projectId: "divine-energy-hub",
  storageBucket: "divine-energy-hub.appspot.com",
  messagingSenderId: "147821831701",
  appId: "1:147821831701:web:55728fe02acdc5d9f5101c",
  measurementId: "G-N71553V4QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
