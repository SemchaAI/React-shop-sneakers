import React from "react";
import { observer } from "mobx-react-lite";

//import store from "./contexts/store";
//import useStore from "../hooks/useStore";

import RouterView from "./routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <RouterView />
        {/* <div className="container">
          <div>
            <h1>Все кроссовки</h1>
          </div>
          <div className="find">
            <input placeholder="search"></input>
          </div>
        </div> */}
        {/* <div className="cardsContainer">
          {[...test, ...test2].map((val, index) => (
            <Card index={index} val={val} key={val.id} />
          ))} */}
        {/* {console.log(test)} */}
        {/* {item.map((val, index) => (
            <Card index={index} val={val} key={val.id} />
          ))} */}
        {/* {console.log(cardsStore.item)}
        </div> */}
      </main>
      <footer></footer>
    </div>
  );
}

//{console.log(cardsStore.item)}

export default observer(App);
