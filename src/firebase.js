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
  // apiKey: "AIzaSyDtfd3Pc83HWaOE5xlY3YXkSqR0tbpXXoQ",
  // authDomain: "circuitbenders-10fb2.firebaseapp.com",
  // databaseURL: "https://circuitbenders-10fb2-default-rtdb.firebaseio.com",
  // projectId: "circuitbenders-10fb2",
  // storageBucket: "circuitbenders-10fb2.appspot.com",
  // messagingSenderId: "525540964961",
  // appId: "1:525540964961:web:e2bf217facb53810024820",
  // measurementId: "G-Q74N8X2EZG"
  apiKey: "AIzaSyDtfd3Pc83HWaOE5xlY3YXkSqR0tbpXXoQ",
  authDomain: "circuitbenders-10fb2.firebaseapp.com",
  databaseURL: "https://circuitbenders-10fb2-default-rtdb.firebaseio.com",
  projectId: "circuitbenders-10fb2",
  storageBucket: "circuitbenders-10fb2.appspot.com",
  messagingSenderId: "525540964961",
  appId: "1:525540964961:web:e2bf217facb53810024820",
  measurementId: "G-Q74N8X2EZG"
})

export const auth = app.auth()
export const db=app.firestore()
