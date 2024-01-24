'use client'
import { createContext, useState, useContext } from 'react';

const MouseContext = createContext({
  isHoveringFooter: false,
  setHoveringFooter: () => {},
});

export const useFooterHover = () => useContext(MouseContext);

export const MouseProvider = ({ children }) => {
  const [isHoveringFooter, setHoveringFooter] = useState(false);
  
  return (
    <MouseContext.Provider value={{ isHoveringFooter, setHoveringFooter }}>
      {children}
    </MouseContext.Provider>
  );
};