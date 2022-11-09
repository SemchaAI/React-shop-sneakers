import { getDatabase, ref, child, get, set } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
export default app;
const db = getDatabase(app);
console.log(db);

let data = [];

export async function load() {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `item/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return (data = snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(data);
  return data;
}

// const BASE_URL = "http://localhost:3000";
// export async function load() {
//   console.log("apiLOAD");
//   let response = await fetch(`${BASE_URL}/item`);
//   //let response = firebase.database().ref(`item`);
//   //console.log(await response.json());

//   return await response.json();
// }

// export async function update(data, id) {
//   console.log(112);
//   let response = await fetch(`${BASE_URL}/item/${id}`, {
//     method: "PATCH",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }
