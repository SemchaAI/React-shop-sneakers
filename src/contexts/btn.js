import React, { useState, createContext } from "react";

export const BtnContext = createContext({
  active: false,
  btnActive: (act) => {},
});

const BtnContextProvider = (props) => {
  const [active, btnActive] = useState(false);
  return (
    <BtnContext.Provider value={{ active, btnActive }}>
      {props.children}
    </BtnContext.Provider>
  );
};

export default BtnContextProvider;
