import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import firebase from "firebase/compat/app"
import { createFirestoreInstance } from "redux-firestore"
import {
  store as guestPersistedStore,
  persistor as guestPersistor,
} from "./config/userPersistConfig"
import { rrfConfig } from "./config/fbConfig"
import { Provider } from "react-redux"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import { PersistGate } from "redux-persist/integration/react"
import customTheme from "./config/theme"

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: guestPersistedStore.dispatch,
  createFirestoreInstance,
  persistStore: guestPersistor,
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={guestPersistedStore}>
      <ChakraProvider theme={customTheme}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <PersistGate
            loading={<div>Loading...</div>}
            persistor={guestPersistor}
          >
            <App />
          </PersistGate>
        </ReactReduxFirebaseProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)