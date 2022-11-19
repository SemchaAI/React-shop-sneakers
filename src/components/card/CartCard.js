import React, { useContext, useEffect, useRef } from "react";

import styles from "./cartCard.module.css";

import useStore from "../../hooks/useStore";
import MinMaxLazy from "../MinMax";
import { change } from "../../api/apiCart";

import { ReactComponent as Cross } from "../../img/cross.svg";

import { BtnContext } from "../../contexts/btn";
import { CFlagBtnContext } from "../../contexts/cFlag";

const CartCard = ({ id, description, price, img, rest, cnt, current }) => {
  const { btnActive, active, setId } = useContext(BtnContext);
  const { setCnt, cnt: contextCnt } = useContext(CFlagBtnContext);
  let [CartCardStore] = useStore("cart");
  let { cart, currentIds } = CartCardStore;
  let data;
  let trash;

  if (currentIds === true) {
    console.log(cart);
    cart.map((val) =>
      val.item.id === id ? (data = val.id) : (trash = val.id)
    );
    console.log("flagId");
    currentIds = false;
    console.log(currentIds);
  }

  /////////////////////////////////////////
  /////////////////////////////////////////
  /////////////////////////////////////////

  const handleInActive = () => {
    btnActive(!active);
    setId(id);
    console.log("remove data" + data);
    CartCardStore.remove(data);
    setCnt(contextCnt - 1);
  };

  // const clickHandler = () => {
  //   CartCardStore.remove(id);
  // };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <img width={70} height={70} src={img} alt="sneakers" />
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
                onChange={(cnt) => change(data, cnt)}
              />
            </b>
          </div>
        </div>
        <div>
          <button onClick={handleInActive} className={styles.btn}>
            <Cross className={styles.cross} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
