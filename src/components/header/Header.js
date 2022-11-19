import { ReactComponent as Cart } from "../../img/cart.svg";
import { ReactComponent as Favorite } from "../../img/favorite.svg";
import { ReactComponent as User } from "../../img/user.svg";
import logoPng from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { CFlagBtnContext } from "../../contexts/cFlag";
import useStore from "../../hooks/useStore";
import styles from "./header.module.css";

import cn from "classnames";
import { useState } from "react";

const Header = () => {
  let [cartStore] = useStore("cart");
  const { cnt, setCnt } = useContext(CFlagBtnContext);
  useEffect(() => {
    let test = cartStore.cart.length;
    setCnt(test);
  }, []);
  console.log(cnt);
  let [anima, setAnima] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setAnima(true), 300);
    setAnima(false);
    return () => {
      clearTimeout(timer1);
    };
  }, [cnt]);
  return (
    <header className="container">
      <Link to="/">
        <div className="leftBar">
          <img
            width={40}
            height={40}
            // src={require("./img/logo.png")}
            src={logoPng}
            alt="sneakers logo"
          />
          <div className="siteInfo">
            <h2>React sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="rightBar">
        <li className="cartPrice">
          <Link to="/cart">
            <Cart />
          </Link>
          <p
            className={cn({
              [styles.counter]: true,
              [styles.animation]: anima === true,
            })}
          >
            {cnt}
          </p>
        </li>
        <li className="favorite">
          <Link to="/favorite">
            <Favorite />
          </Link>
        </li>
        <li>
          <Link to="/user">
            <User />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
