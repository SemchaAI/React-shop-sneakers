import React, { useState } from "react";

import styles from "./cartCard.module.css";

import useStore from "../../hooks/useStore";
import MinMaxLazy from "../MinMax";
import { change } from "../../api/apiCart";

import { ReactComponent as Cross } from "../../img/cross.svg";

const CartCard = ({ id, description, price, img, rest, cnt, current }) => {
  let [CartCardStore] = useStore("cart");
  const clickHandler = () => {
    CartCardStore.remove(id);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <img
            width={70}
            height={70}
            src={require(`../../img/sneakers${img}.jpg`)}
            alt="sneakers"
          />
        </div>
        <div className={styles.addCard}>
          <div>
            <p>{description}</p>
            <b>
              <div className="">{price}$</div>
              {
                /* <div className={styles.cntHandler}>
                <button className={styles.dec}>
                  <Dash fill="#E97B61" />
                </button>
                <input type="number"></input>
                <button className={styles.inc}>
                  <Cross fill="#9DD458" />
                </button>
              </div> */
                console.log(cnt)
              }
              <MinMaxLazy
                key={id}
                min={1}
                max={rest}
                current={current}
                onChange={(cnt) => change(id, cnt)}
              />
            </b>
          </div>
        </div>
        <div>
          <button onClick={clickHandler} className={styles.btn}>
            <Cross className={styles.cross} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
