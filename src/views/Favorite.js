import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import styles from "./Favorite.module.css";
import FavorList from "../components/favorFilters/FavorList";
import Card from "../components/card/Card";

import { ReactComponent as Back } from "../img/back.svg";
import { Link } from "react-router-dom";
import EmptyContainer from "../components/emptyContainer/EmptyContainer";

function Favorite() {
  const list = FavorList();
  const [newlist, setNewlist] = useState(list);
  return (
    <>
      {newlist.length === 0 ? (
        <EmptyContainer
          cart={false}
          post={`Закладок нет :(`}
          description={`Вы ничего не добавляли в закладки`}
        />
      ) : (
        <div className={styles.container}>
          <div className={styles.backContainer}>
            <Link to="/" className={styles.backButton}>
              <Back className={styles.back} />
            </Link>
            <h2>Мои закладки</h2>
          </div>
          <div className={styles.cardsContainer}>
            {newlist.map((val, index) => (
              <Card index={index} val={val} key={val.id} rest={val.rest} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default observer(Favorite);
