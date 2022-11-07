import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); //the loader whe there is a get request
  return (
    <ModalContext.Provider
      value={{isOpen, setIsOpen}}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
