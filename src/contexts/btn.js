import React, { useState, createContext } from "react";

export const BtnContext = createContext({
  active: false,
  btnActive: (act) => {},
  id: undefined,
  setId: (act) => {},
});

const BtnContextProvider = (props) => {
  const [active, btnActive] = useState(false);
  const [id, setId] = useState(undefined);
  return (
    <BtnContext.Provider value={{ id, setId, active, btnActive }}>
      {props.children}
    </BtnContext.Provider>
  );
};

export default BtnContextProvider;
