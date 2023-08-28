import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAnalytics } from "firebase/analytics"

const fbConfig = {
  apiKey: "AIzaSyDCRqjrXzrfFJdSdZj5t5V71t3OQpNBhbc",
  authDomain: "project-1-6ca2b.firebaseapp.com",
  projectId: "project-1-6ca2b",
  storageBucket: "project-1-6ca2b.appspot.com",
  messagingSenderId: "316865054254",
  appId: "1:316865054254:web:29842692c6d831efaf01bf",
  measurementId: "G-G7TKYH3GMV",
}

export const app = firebase.initializeApp(fbConfig)

export const db = firebase.firestore()

export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableClaims: true,
  attachAuthIsReady: true,
  firebaseStateName: "firebase",
}

const analytics = getAnalytics(app)
