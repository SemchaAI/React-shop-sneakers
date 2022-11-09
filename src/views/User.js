import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
//import ProductCard from "./../components/products/card";

function User() {
  const auth = firebase.auth();
  const [logtoken, setLogtoken] = useState(
    localStorage.getItem("user") !== null ? true : false
  );
  console.log(logtoken);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    // Authenticate with the first user then save the currentUser to a local variable
    let googleToken;
    const anonUser = auth.currentUser;
    // Authenticate with a second method and get a credential
    anonUser
      .linkWithPopup(provider)
      .then(function (result) {
        googleToken = result.credential;
        console.log(googleToken);
      })
      .catch(function (error) {
        auth.signInWithCredential(error.credential);
      });

    // const credential = GoogleAuthProvider.credential(
    //   user.getAuthResponse().id_token
    // );
    // // const auth = getAuth();
    // linkWithCredential(auth.currentUser, credential)
    //   .then((usercred) => {
    //     const user = usercred.user;
    //     console.log("Anonymous account successfully upgraded", user);
    //   })
    //   .catch((error) => {
    //     console.log("Error upgrading anonymous account", error);
    //   });
    // localStorage.setItem("user", user.uid);

    // Sign in with credential from the Google user silently.
    //console.log(user.uid);
    setLogtoken(true);
  };
  const logout = async () => {
    localStorage.removeItem("user");
    await firebase.auth().signOut();
    setLogtoken(false);
  };

  return (
    <>
      {logtoken ? (
        <div>
          <h2>Hello world</h2>
          <div>{console.log(auth)}</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Авторизация</h2>
          <p>Выберите способ авторизации:</p>
          <button onClick={login}>Google</button>
          <button>Facebook</button>
        </div>
      )}
    </>
  );
}

export default observer(User);
