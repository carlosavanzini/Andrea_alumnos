import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF6dg0XrJJ-ZHlGY2PXI2rFzl7e10QkCA",
  authDomain: "alumnos-andrea-firebase.firebaseapp.com",
  projectId: "alumnos-andrea-firebase",
  storageBucket: "alumnos-andrea-firebase.appspot.com",
  messagingSenderId: "440178526948",
  appId: "1:440178526948:web:fa8af79098d4dcee6afaf1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
