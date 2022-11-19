import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import styles from "./User.module.css";

import { ReactComponent as Logout } from "../img/logout.svg";
//import ProductCard from "./../components/products/card";

function User() {
  const auth = firebase.auth();
  const [logtoken, setLogtoken] = useState(
    localStorage.getItem("gUser") === "true" ? true : false
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
        <div className={styles.container}>
          <h2>Switch account?</h2>
          <div>{console.log(auth)}</div>
          <button className={styles.googleBtn} onClick={logout}>
            <Logout className={styles.logoutIcon} />
            <p className={`${styles.btnText} ${styles.logoutText}`}>Logout</p>
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Авторизация</h2>
          <p className={styles.containerP}>Выберите способ авторизации:</p>
          <button className={styles.googleBtn} onClick={login}>
            <div className={styles.googleIconWrapper}>
              <img
                className={styles.googleIcon}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google logo"
              />
            </div>
            <p className={styles.btnText}>Sign in with google</p>
          </button>
        </div>
      )}
    </>
  );
}

export default observer(User);
