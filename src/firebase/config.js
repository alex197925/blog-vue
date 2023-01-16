/** @format */

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkZikZKE_EOxmZFquB3-ZjmUMW7emwfeE",
  authDomain: "vue-firebase-sites-acd4b.firebaseapp.com",
  projectId: "vue-firebase-sites-acd4b",
  storageBucket: "vue-firebase-sites-acd4b.appspot.com",
  messagingSenderId: "871812892803",
  appId: "1:871812892803:web:34055b762871b15be8b3b6",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
