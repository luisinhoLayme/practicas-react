import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD3gMiOOBj-shxQqTpThvhEROhDtX5lcHI",
  authDomain: "journal-app-1fd07.firebaseapp.com",
  projectId: "journal-app-1fd07",
  storageBucket: "journal-app-1fd07.appspot.com",
  messagingSenderId: "515634448743",
  appId: "1:515634448743:web:6bbfc0e6fdcc35c42847c2"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider()


export {
  db,
  googleAuthProvider
}
