import React, { useRef } from "react";

import { observer } from "mobx-react-lite";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";
import useStore from "../hooks/useStore";
import CartCard from "../components/card/CartCard";

import { ReactComponent as CartImg } from "../img/cart.svg";
import { ReactComponent as Arrow } from "../img/arrowBack.svg";
import CartBox from "../img/cartBox.png";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Cart = () => {
  let [CartCardStore] = useStore("cart");
  let { cartDetailed: cart, total, totalWithTax } = CartCardStore;
  const ref = useRef();
  let emptyCart = cart.length === 0;

  const navigate = useNavigate();
  useOnClickOutside(ref, () => navigate("/"));

  return (
    <>
      <div className={styles.backdrop}></div>
      {emptyCart ? (
        <div className={styles.cart} ref={ref}>
          <div className={styles.empty}>
            <div className={styles.svgAlt}>
              <h2>Корзина</h2>
              <CartImg />
            </div>
            <div className={styles.emptyInfo}>
              <img
                width={120}
                height={120}
                src={CartBox}
                alt="opened empty box"
              ></img>
              <p>
                <b> Корзина пустая</b>
              </p>
              <p className={styles.opacity}>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <div
                className={`${styles.linkContainer} ${styles.justifyCenter}`}
              >
                <Link className={`${styles.btn}  ${styles.link}`} to="/">
                  <Arrow className={styles.arrow2} />
                  Вернуться
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cart} ref={ref}>
          <div className={styles.svg}>
            <h2>Корзина</h2>
            <CartImg />
          </div>
          <div className={styles.cardBox}>
            {cart.map((pr, i) => (
              <CartCard
                key={pr.id}
                rest={pr.rest}
                cnt={pr.cnt}
                current={pr.cnt}
                {...pr}
              />
            ))}
            {/* {console.log(cart)} */}
          </div>
          <div className={styles.cartFooter}>
            <p>
              Себестоимость:
              <b>{total}$</b>
            </p>
            <p>
              Налог 5%:
              <b>{totalWithTax}$</b>
            </p>
            <div className={styles.btnContainer}>
              <div className={styles.linkContainer}>
                <Link
                  className={`${styles.btn} ${styles.btn2} ${styles.link}`}
                  to="/"
                >
                  <Arrow className={styles.arrow2} />
                  Вернуться
                </Link>
              </div>
              <div className={styles.linkContainer}>
                <Link className={`${styles.btn} ${styles.link}`} to="#">
                  Оформить заказ
                  <Arrow className={styles.arrow} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Cart);
