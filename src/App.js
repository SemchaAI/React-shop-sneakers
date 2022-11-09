import React from "react";
import { observer } from "mobx-react-lite";

//import store from "./contexts/store";
//import useStore from "../hooks/useStore";

import RouterView from "./routes";
import Header from "./components/header/Header";
import BtnContextProvider from "./contexts/btn";

import { add, testChange, addInit, load } from "./api/apiCart";

import { getAuth, signInAnonymously } from "firebase/auth";
import app from "./api/apiCard";
import firebase from "firebase/compat/app";
import Cart from "./store/cart";

firebase.auth(app).onAuthStateChanged(function (user) {
  if (user) {
    console.log("signed");
    localStorage.setItem("user", user.uid);
    if (Cart) {
    }
    console.log(addInit({ [user.uid]: [] }));
    //console.log(add({ id: 1, cnt: 1 }));
    //console.log(testChange());
    console.log(user.uid);
  } else {
    firebase
      .auth()
      .signInAnonymously()
      .then(localStorage.setItem("user", user.uid));
    // console.log(add({ [user.uid]: [] }));
    console.log(user.uid);
  }
});

function App() {
  return (
    <BtnContextProvider>
      <div className="wrapper">
        <Header />
        <main>
          <RouterView />
        </main>
        <footer></footer>
      </div>
    </BtnContextProvider>
  );
}

//{console.log(cardsStore.item)}

export default observer(App);
