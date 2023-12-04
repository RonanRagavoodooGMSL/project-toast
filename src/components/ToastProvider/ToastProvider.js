import React, { createContext, useState } from "react";

export const ToastContext = createContext();
function ToastProvider({ children }) {
  const [stack, setStack] = useState([]);

  return (
    <ToastContext.Provider value={{ stack, setStack }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
