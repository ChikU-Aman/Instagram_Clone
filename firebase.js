// Import the functions you need from the SDKs you nee
// Your web app's Firebase configuration

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// import 'firebase/compat/database'
// import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAz7FseaaIFqw2IRUtoY-2pWaacMjgcVtI",
  authDomain: "chiku-instagram-clone.firebaseapp.com",
  projectId: "chiku-instagram-clone",
  storageBucket: "chiku-instagram-clone.appspot.com",
  messagingSenderId: "521717090845",
  appId: "1:521717090845:web:7ab51b90e81ab4b5ba54f4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export default firebase