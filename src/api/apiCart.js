const BASE_URL = "http://localhost:3000";

export async function load() {
  console.log("apiCartLOAD");
  let response = await fetch(`${BASE_URL}/cart`);
  return await response.json();
}
export async function add(data, id) {
  let response = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
export async function remove(id) {
  let response = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
export async function change(id, cnt) {
  let response = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({ cnt: cnt }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
