import { ReactComponent as Add } from "../../img/add.svg";
import { ReactComponent as Added } from "../../img/added.svg";
import { ReactComponent as Favorite } from "../../img/heart.svg";
import React, { useEffect, useState } from "react";

import styles from "./card.module.css";

import cn from "classnames";
import useStore from "../../hooks/useStore";

import { BtnContext } from "../../contexts/btn";
import { useContext } from "react";
import { CFlagBtnContext } from "../../contexts/cFlag";

const Card = (props) => {
  let [cardsStore, cartStore] = useStore("cards", "cart");
  let { item } = cardsStore;
  const { id, description, price, img, rest } = props.val;
  let findItem = cartStore.inCartNew(id);
  console.log(findItem + "finded");
  const [btnState, setBtnState] = useState(findItem);
  const [favorbtnState, setFavorBtnState] = useState(false);
  const { id: cardId, active } = useContext(BtnContext);
  const { setCnt, cnt } = useContext(CFlagBtnContext);

  const handleActive = () => {
    if (!btnState) {
      cartStore.add(id);
      // btnActive(true);
      setCnt(cnt + 1);
      setBtnState(true);
    }
  };
  useEffect(() => {
    if (cardId === id) {
      setBtnState(false);
    }
    // if (active === false) {
    //   setBtnState(false);
    // }
  }, [cardId, id, active]);

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
    <>
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
            className={cn({ [styles.filter]: rest === 0 })}
            width={133}
            height={112}
            src={img}
            title={`We have only - ${rest}  pairs of this model`}
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
              <button onClick={handleActive} className={styles.btn}>
                {btnState ? <Added /> : <Add />}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.warning}>Out of Stock</div>
        )}
      </div>
    </>
  );
};

export default Card;
