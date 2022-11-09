import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import RootStore from "./store";
import StoreContext from "./contexts/store";

//console.log(firestore);

const store = new RootStore();
// store.cards.loading();
store.cards
  .load()
  .then(store.cart.load())
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      // <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
      // </React.StrictMode>
    );
  });
