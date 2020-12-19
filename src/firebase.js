import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj7wzmvV0OoGR9qpdW69ZIc5OyzKf3C7A",
  authDomain: "tinder-clone-22223.firebaseapp.com",
  projectId: "tinder-clone-22223",
  storageBucket: "tinder-clone-22223.appspot.com",
  messagingSenderId: "948165323921",
  appId: "1:948165323921:web:01ea33c3e1ce7b90de2330",
  measurementId: "G-S7S5JK5EG0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
