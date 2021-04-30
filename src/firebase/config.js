import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-K6zyRgPtAjYg3gAEbDVKc8e6alsnJ4w",
  authDomain: "evernote-8cd58.firebaseapp.com",
  projectId: "evernote-8cd58",
  storageBucket: "evernote-8cd58.appspot.com",
  messagingSenderId: "18672328681",
  appId: "1:18672328681:web:7743b2681d0bf7b18ab578",
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const getTimeStamp = firebase.firestore.FieldValue.serverTimestamp

export { db, getTimeStamp }
