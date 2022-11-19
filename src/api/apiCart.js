// import "firebase/compat/app";
// import "firebase/compat/auth";
// import app from "../api/apiCard";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   child,
//   update,
//   push,
//   removeValue,
//   query,
//   orderByChild,
//   equalTo,
// } from "firebase/database";

// const db = getDatabase(app);
// const dbRef = ref(db);
// let cartData = [];
// let arrayIndex;
// const dbRefCarts = ref(db, `carts/${userId}/`);

const BASE_URL = "http://localhost:3000";
// export async function load() {
//   console.log("apiCartLOAD");
//   let response = await fetch(`${BASE_URL}/cart`);
//   //console.log(response.json());
//   //console.log("apiCartLOAD");
//   return await response.json();
// }
export async function load() {
  console.log("apiCartLOAD");
  const userId = localStorage.getItem("user");
  let response = await fetch(`${BASE_URL}/items?cartId=${userId}`);
  //console.log(response.json());
  //console.log("apiCartLOAD");
  console.log(response);
  return await response.json();
}

// export async function load() {
//   //await set(child(dbRef, `carts/` + userId), { cart: false });
//   const index = await get(child(dbRef, `carts/` + userId)).then((snapshot) => {
//     if (snapshot.exists()) {
//       //console.log(snapshot.val());
//       return (cartData = snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   });
//   //console.log("ind", index.length);
//   arrayIndex = index.length;
//   //console.log("arr", arrayIndex);
//   console.log(cartData);
//   return cartData;
// }

export async function addInit(data, id) {
  let response = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

// export async function add(data, id) {
//   let response = await fetch(`${BASE_URL}/cart/`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }

export async function add(data, id) {
  const userId = localStorage.getItem("user");
  let response = await fetch(`${BASE_URL}/cart/${userId}/items`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
// export async function add(data, id) {
//   const index = await get(child(dbRef, `carts/` + userId));
//   arrayIndex = index.size;
//   const newCartData = child(dbRefCarts, `${arrayIndex}/`);
//   await set(newCartData, data);
//   //update(newCartData, data);
//   await get(child(dbRefCarts, `${arrayIndex}/`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//       return cartData.push(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   });
//   console.log(cartData);
//   return cartData;
// }

// export async function remove(id) {
//   let response = await fetch(`${BASE_URL}/cart/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }

export async function remove(id) {
  let response = await fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

// export async function remove(id) {

//   const que = query(
//     ref(db, `carts/${userId}/`),
//     orderByChild("id"),
//     equalTo(id)
//   );
//   await get(ref(db, `carts/${userId}/`)).then((snapshot) => {
//     let key = Object.keys(snapshot.val())[0];
//     console.log(key);
//     //set(ref(db, `carts/${userId}/${key}`), null);
//     //snapshot.ref.remove();
//   });
//   const a = await get(que).then((snapshot) => {
//     let key = Object.keys(snapshot.val())[0];
//     console.log(key);
//     set(ref(db, `carts/${userId}/${key}`), null);
//     //snapshot.ref.remove();
//   });

// }

export async function change(id, cnt) {
  let response = await fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ cnt: cnt }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}

// export async function change(id, cnt) {
//   let response = await fetch(`${BASE_URL}/cart/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({ cnt: cnt }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return await response.json();
// }
