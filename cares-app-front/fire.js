import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyD3nnwMTS6s95xhZlNctB6cjSEq9qhyT68",
  authDomain: "cares-jobs.firebaseapp.com",
  databaseURL: "https://cares-jobs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cares-jobs",
  storageBucket: "cares-jobs.appspot.com",
  messagingSenderId: "818409067708",
  appId: "1:818409067708:web:7cea0a2e300e525b7becb9",
  measurementId: "G-6MK1WGQTVV",
};

var fire = firebase.initializeApp(config);
export default fire;
