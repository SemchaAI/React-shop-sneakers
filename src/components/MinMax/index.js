import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

import { ReactComponent as Cross } from "../../img/cross.svg";
import { ReactComponent as Dash } from "../../img/dash.svg";

MinMaxLazy.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function MinMaxLazy({ min = 1, max, current, onChange }) {
  let inp = useRef();

  function onKeyPress(e) {
    if (e.key === "Enter") {
      parseCurrentStr(e);
    }
  }

  function parseCurrentStr() {
    console.log("1");
    let num = parseInt(inp.current.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  function applyCurrent(num) {
    console.log("2");
    let validNum = Math.max(min, Math.min(max, num));
    inp.current.value = validNum;
    onChange(validNum);
  }

  let inc = () => applyCurrent((current = current + 1));
  let dec = () => applyCurrent((current = current - 1));

  useEffect(() => {
    console.log("2");
    inp.current.value = current;
  }, [current]);

  return (
    <div className={styles.cntHandler}>
      <button className={styles.dec} type="button" onClick={dec}>
        <Dash fill="#E97B61" />
      </button>
      <input
        ref={inp}
        type="text"
        className={styles.inp}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <button className={styles.inc} type="button" onClick={inc}>
        <Cross fill="#9DD458" />
      </button>
    </div>
  );
}

export default MinMaxLazy;
