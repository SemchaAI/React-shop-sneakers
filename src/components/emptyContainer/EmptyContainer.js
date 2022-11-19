import React from "react";
import { Link } from "react-router-dom";
import styles from "./emptyContainer.module.css";

import { ReactComponent as CartImg } from "../../img/cart.svg";
import { ReactComponent as Arrow } from "../../img/arrowBack.svg";
import CartBox from "../../img/cartBox.png";
import emoji from "../../img/emojiE404.png";

const EmptyContainer = ({ cart, post, description, img }) => {
  console.log(cart);
  let width = 120;
  let height = 120;
  if (img === `CartBox`) {
    img = CartBox;
    width = 120;
    height = 120;
  } else {
    img = emoji;
    width = 70;
    height = 70;
  }
  return (
    <div className={styles.empty}>
      {cart === true ? (
        <div className={styles.svgAlt}>
          <h2>Корзина</h2>
          <CartImg />
        </div>
      ) : (
        <></>
      )}
      <div className={styles.emptyInfo}>
        <img
          width={width}
          height={height}
          src={img}
          alt="opened empty box"
        ></img>
        <p>
          <b>{post}</b>
        </p>
        <p className={styles.opacity}>{description}</p>
        <div className={`${styles.linkContainer} ${styles.justifyCenter}`}>
          <Link className={`${styles.btn}  ${styles.link}`} to="/">
            <Arrow className={styles.arrow2} />
            Вернуться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyContainer;
