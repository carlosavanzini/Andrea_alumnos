import firebase from 'firebase';
import "firebase/firestore";



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
