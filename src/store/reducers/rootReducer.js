import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import homepageReducer from "./homepageReducer"

const rootReducer = combineReducers({
  homepage: homepageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer