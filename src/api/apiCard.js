const BASE_URL = "http://localhost:3000";

export async function load() {
  console.log("apiLOAD");
  let response = await fetch(`${BASE_URL}/item`);
  return await response.json();
}

export async function update(data, id) {
  console.log(112);
  let response = await fetch(`${BASE_URL}/item/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await response.json();
}
