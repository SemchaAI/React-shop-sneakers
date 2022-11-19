import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import RootStore from "./store";
import StoreContext from "./contexts/store";

import { addInit } from "./api/apiCart";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const fbConfig = {
  apiKey: "AIzaSyAv6kw0FQ0MkwPvTiJJG1t2QhXjuiukiig",
  authDomain: "react-sneakers-4151c.firebaseapp.com",
  databaseURL:
    "https://react-sneakers-4151c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-sneakers-4151c",
  storageBucket: "react-sneakers-4151c.appspot.com",
  messagingSenderId: "505872214861",
  appId: "1:505872214861:web:64f91063fb495a0d50e504",
};

const app = firebase.initializeApp(fbConfig);
const db = getDatabase(app);

const store = new RootStore();
// store.cards.loading();

let loadOnceFlag = true;
store.cards
  .load()
  .then(
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        if (!user.isAnonymous) {
          console.log("signed33333333333");
          //localStorage.setItem("user", user.uid);
          localStorage.setItem("gUser", true);
          console.log(store.cart.load());
          //console.log(add({ id: 1, cnt: 1 }));
          //console.log(testChange());
        } else {
          console.log("signed_Anon222222222");
          localStorage.setItem("gUser", false);
          console.log(store.cart.load());
          // localStorage.getItem("user") == null
          // ? console.log(addInit({ id: user.uid }))
          // : console.log("already_signed");
          //localStorage.setItem("user", user.uid);
        }
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .then((credential) => {
            console.log("anon11111");
            localStorage.setItem("user", credential.user.uid);
            console.log(store.cart.load());
            if (loadOnceFlag) {
              addInit({ id: credential.user.uid });
              loadOnceFlag = false;
            }
          });
      }
    })
  )
  // .then(
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       localStorage.getItem("user") == null
  //         ? console.log(addInit({ id: user.uid }))
  //         : console.log("already_signed");
  //       localStorage.setItem("user", user.uid);
  //     }
  //   })
  // )
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      // <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
      // </React.StrictMode>
    );
  });
