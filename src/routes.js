import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./views/Cart";
import E404 from "./views/E404";

import Home from "./views/Home";
// import Product from "./views/Product";
// import Cart from "./views/Cart";
// import Order from "./views/Order";
// import Result from "./views/Result";
// import E404 from "./views/E404";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <>
            <Home />
            <Cart />
          </>
        }
      />
      <Route
        path="*"
        element={
          <E404
            name={"Страница не найдена"}
            desc={"Уупс, что-то пошло не так"}
          />
        }
      />
    </Routes>
  );
}
