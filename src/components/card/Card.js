import { ReactComponent as Add } from "../../img/add.svg";
import { ReactComponent as Added } from "../../img/added.svg";
import { ReactComponent as Favorite } from "../../img/heart.svg";
import React, { useEffect, useState } from "react";

import styles from "./card.module.css";

import cn from "classnames";
import useStore from "../../hooks/useStore";

const Card = (props) => {
  let [cardsStore, cartStore] = useStore("cards", "cart");
  let { item } = cardsStore;
  const { id, description, price, img, rest } = props.val;
  let findItem = cartStore.inCart(id);

  const [btnState, setBtnState] = useState(findItem);
  const [favorbtnState, setFavorBtnState] = useState(false);

  const clickHandler = () => {
    // if (cartStore.inCart(id)) {
    //   setBtnState(false);
    // }
    cartStore.add(id);
    setBtnState(true);
  };
  const favorClickHandler = () => {
    setFavorBtnState(!favorbtnState);
    //cardsStore.find(props.val.id);
    if (window.localStorage.getItem(`favor${id}`)) {
      window.localStorage.removeItem(`favor${id}`);
    } else {
      window.localStorage.setItem(`favor${id}`, id);
    }
    console.log(item);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorContainer}>
        <button onClick={favorClickHandler} className={styles.favorBtn}>
          <Favorite
            className={cn({
              // [styles.fill]: props.val.favor === true,
              [styles.fill]:
                window.localStorage.getItem(`favor${id}`) === String(id),
            })}
          />
        </button>
        <img
          width={133}
          height={112}
          src={require(`../../img/sneakers${img}.jpg`)}
          alt="sneakers"
        />
      </div>
      <p>{description}</p>
      {rest > 0 ? (
        <div className={styles.addCard}>
          <div>
            <span>Price:</span>
            <b>{price}$</b>
          </div>
          <div>
            <button onClick={clickHandler} className={styles.btn}>
              {btnState ? <Added /> : <Add />}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.warning}>Out of Stock</div>
      )}
    </div>
  );
};

export default Card;
