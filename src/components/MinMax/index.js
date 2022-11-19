import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

import { ReactComponent as Cross } from "../../img/cross.svg";
import { ReactComponent as Dash } from "../../img/dash.svg";
import useStore from "../../hooks/useStore";

MinMaxLazy.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function MinMaxLazy({ min = 1, max, current, onChange }) {
  let inp = useRef();
  const [cur, setCur] = useState(false);
  let [CartCardStore] = useStore("cart");

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
    if (inp.current.value >= max) {
      //setCur(Number(inp.current.value));
      current = Number(inp.current.value);
      console.log("2-1", current);
      setCur(!cur);
    } else if (inp.current.value <= min) {
      // setCur(min);
      current = min;
      console.log("2-2", current);
      setCur(!cur);
    } else {
      //setCur(validNum);
      current = num;
      console.log("2-3", current);
      setCur(!cur);
    }
    onChange(validNum);
  }

  let inc = () => applyCurrent(current + 1);
  let dec = () => applyCurrent(current - 1);

  useEffect(() => {
    console.log("23");
    //current = cur;
    const timeOutId = setTimeout(() => {
      CartCardStore.load();
    }, 200);
    console.log(current);
    return () => clearTimeout(timeOutId);
    //inp.current.value = current;
  }, [cur]);

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
