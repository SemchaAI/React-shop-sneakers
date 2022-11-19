import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./views/Cart";
import E404 from "./views/E404";
import Favorite from "./views/Favorite";

import Home from "./views/Home";
import User from "./views/User";
// import Product from "./views/Product";
// import Cart from "./views/Cart";
// import Order from "./views/Order";
// import Result from "./views/Result";
// import E404 from "./views/E404";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  // let user = useRef(false);
  // const [token, setToken] = useState();
  // setToken(localStorage.getItem("user"));
  // console.log(token);
  // useEffect(() => {
  //   if (token !== null) {
  //     user.current = true;
  //   } else {
  //     user.current = false;
  //   }
  // }, [token]);

  // if (token !== null) {
  //   user = true;
  // }
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
      <Route path="/user" element={<User />} />
      <Route path="/favorite" element={<Favorite />} />
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
