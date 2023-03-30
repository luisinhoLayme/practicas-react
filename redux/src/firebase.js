import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCTXk52yQYtNeLATtW6JmQF1wfLqY41ZsE",
  authDomain: "app-redux-udemy.firebaseapp.com",
  projectId: "app-redux-udemy",
  storageBucket: "app-redux-udemy.appspot.com",
  messagingSenderId: "922645144754",
  appId: "1:922645144754:web:ff3edd6bc30e6085d1d5ab",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
<<<>>>
{{{{{{{{{{{{}}}}}}}}}}}}
[[[[[[[[[[[[]]]]]]]]]]]]
(((((((((((())))))))))))

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}
