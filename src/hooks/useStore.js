import { useContext } from "react";
import StoreContext from "./../contexts/store";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (...list) {
  let stores = useContext(StoreContext);
  return list.map((name) => stores[name]);
}
