import React from "react";

import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import Card from "../components/card/Card";

//import ProductCard from "./../components/products/card";

export default observer(Home);

const FavorList = () => {
  let [cardsStore] = useStore("cards");
  let { item } = cardsStore;

  let test = [],
    test2 = [];

  test = item.filter(
    (val) => String(val.id) === window.localStorage.getItem(`favor${val.id}`)
  );

  test2 = item.filter(
    (val) => String(val.id) !== window.localStorage.getItem(`favor${val.id}`)
  );
  return [...test, ...test2];
};

function Home() {
  console.log("render");
  const productsList = FavorList();

  return (
    <>
      <div className="container">
        <div>
          <h1>Все кроссовки</h1>
        </div>
        <div className="find">
          <input placeholder="search"></input>
        </div>
      </div>
      <div className="cardsContainer">
        {productsList.map((val, index) => (
          <Card index={index} val={val} key={val.id} rest={val.rest} />
        ))}
        {/* {console.log(test)} */}
        {/* {item.map((val, index) => (
            <Card index={index} val={val} key={val.id} />
          ))} */}
      </div>
    </>
  );
}
