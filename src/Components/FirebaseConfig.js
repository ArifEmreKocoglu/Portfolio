import Firebase from "firebase/compat/app";
import "firebase/compat/database";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtImAfWW1k11BAUpfoBL5sMtGnXwf3ZRU",
  authDomain: "ebra-blog.firebaseapp.com",
  databaseURL: "https://ebra-blog-default-rtdb.firebaseio.com",
  projectId: "ebra-blog",
  storageBucket: "ebra-blog.appspot.com",
  messagingSenderId: "972894646400",
  appId: "1:972894646400:web:07fc26c53e92272959f665",
  measurementId: "G-SS88VJ4NKQ"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
export default Firebase;
