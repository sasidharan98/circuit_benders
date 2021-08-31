import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyAoIdCUADd39mQK0TuNM2EJhzrfuW7bDwM",
  authDomain: "circuit-b87b7.firebaseapp.com",
  databaseURL: "https://circuit-b87b7.firebaseio.com",
  projectId: "circuit-b87b7",
  storageBucket: "circuit-b87b7.appspot.com",
  messagingSenderId: "285429617143",
  appId: "1:285429617143:web:01ce38b1ca7c1acc821ef2",
  measurementId: "G-MLKN0MPG4G"
})

export const auth = app.auth()
export const db=app.firestore()
