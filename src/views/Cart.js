import React, { useEffect, useRef } from "react";

import { observer } from "mobx-react-lite";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";
import useStore from "../hooks/useStore";
import CartCard from "../components/card/CartCard";

import { ReactComponent as CartImg } from "../img/cart.svg";
import { ReactComponent as Arrow } from "../img/arrowBack.svg";
import CartBox from "../img/cartBox.png";
import useOnClickOutside from "../hooks/useOnClickOutside";
import EmptyContainer from "../components/emptyContainer/EmptyContainer";

const Cart = () => {
  let [CartCardStore] = useStore("cart");
  let { cartDetailed: cart, total, totalWithTax } = CartCardStore;
  useEffect(() => {
    CartCardStore.load();
    console.log("load");
  }, [CartCardStore]);
  const ref = useRef();
  let emptyCart = cart.length === 0;

  const navigate = useNavigate();
  useOnClickOutside(ref, () => navigate("/"));

  return (
    <>
      <div className={styles.backdrop}></div>
      {emptyCart ? (
        <div className={styles.cart} ref={ref}>
          <EmptyContainer
            cart={true}
            post={`Корзина пустая`}
            description={`Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`}
            img={`CartBox`}
          />
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
                img={pr.img}
                {...pr}
              />
            ))}
          </div>
          <div className={styles.cartFooter}>
            <p>
              Себестоимость:
              <b>{total}$</b>
            </p>
            <p>
              Налог 5%:
              <b>{totalWithTax.toFixed(2)}$</b>
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
