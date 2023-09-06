import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import homepageReducer from "./homepageReducer"
import globalReducer from "./globalReducers"

const rootReducer = combineReducers({
  globalactions: globalReducer,
  homepage: homepageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer