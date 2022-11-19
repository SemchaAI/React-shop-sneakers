import React, { useState, createContext } from "react";

export const CFlagBtnContext = createContext({
  cnt: 0,
  setCnt: (pre) => {},
});

const CFlagContextProvider = (props) => {
  const [cnt, setCnt] = useState(0);
  return (
    <CFlagBtnContext.Provider value={{ cnt, setCnt }}>
      {props.children}
    </CFlagBtnContext.Provider>
  );
};

export default CFlagContextProvider;
