import React from "react";

import PropTypes from "prop-types";

import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./E404.module.css";

import emoji from "../img/emojiE404.png";

import { ReactComponent as Arrow } from "../img/arrowBack.svg";

//import ProductCard from "./../components/products/card";

const E404 = ({ name, desc }) => {
  return (
    <div className={styles.container}>
      <img src={emoji} width={70} height={70} alt="emoji sadness"></img>
      <h2>{name}</h2>
      <p>{desc}</p>
      <button className={styles.btn}>
        <Arrow className={styles.arrow} />
        <Link className={styles.link} to="/">
          Вернуться на главную
        </Link>
      </button>
    </div>
  );
};

E404.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default observer(E404);
