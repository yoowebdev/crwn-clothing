import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBocKapIaZ67KuUl2PJHvd6J4AzBB4kZcA",
  authDomain: "crown-clothing-db-18f18.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-18f18.firebaseio.com",
  projectId: "crown-clothing-db-18f18",
  storageBucket: "",
  messagingSenderId: "604293244269",
  appId: "1:604293244269:web:3c95fbba3217867a326664",
  measurementId: "G-457VXT83QZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
