// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH6fUFh3dxoChhwR88Iu6M0X6fZVg5hxU",

  authDomain: "ebool-management-system.firebaseapp.com",

  projectId: "ebool-management-system",

  storageBucket: "ebool-management-system.appspot.com",

  messagingSenderId: "911177135029",

  appId: "1:911177135029:web:381f28bc472184a16e5ffc",

  measurementId: "G-LCVE670V6R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
