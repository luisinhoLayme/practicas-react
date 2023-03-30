import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe5HrTbIFUv8qZlKz4R5VG_0LGss-A1Wk",
  authDomain: "grud-react-udemy.firebaseapp.com",
  projectId: "grud-react-udemy",
  storageBucket: "grud-react-udemy.appspot.com",
  messagingSenderId: "826962566402",
  appId: "1:826962566402:web:0cf13a037f05820c66761b",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}
