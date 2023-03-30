import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAe5HrTbIFUv8qZlKz4R5VG_0LGss-A1Wk",
  authDomain: "grud-react-udemy.firebaseapp.com",
  projectId: "grud-react-udemy",
  storageBucket: "grud-react-udemy.appspot.com",
  messagingSenderId: "826962566402",
  appId: "1:826962566402:web:0cf13a037f05820c66761b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}
