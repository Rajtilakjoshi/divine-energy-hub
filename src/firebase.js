import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your Firebase configuration object
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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { auth, firestore, storage };
