import React from "react";
import { observer } from "mobx-react-lite";

//import store from "./contexts/store";
//import useStore from "../hooks/useStore";

import RouterView from "./routes";
import Header from "./components/header/Header";
import BtnContextProvider from "./contexts/btn";
import CFlagContextProvider from "./contexts/cFlag";

function App() {
  return (
    <CFlagContextProvider>
      <BtnContextProvider>
        <div className="wrapper">
          <Header />
          <main>
            <RouterView />
          </main>
          <footer></footer>
        </div>
      </BtnContextProvider>
    </CFlagContextProvider>
  );
}

//{console.log(cardsStore.item)}

export default observer(App);
