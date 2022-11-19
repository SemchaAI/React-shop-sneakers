import { getDatabase, ref, child, get } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
