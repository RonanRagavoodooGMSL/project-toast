import React, { createContext, useState } from "react";
import useEscapeKey from "../hooks/useEscapeKey";

export const ToastContext = createContext();
function ToastProvider({ children }) {
  const [stack, setStack] = useState([]);

  useEscapeKey(() => setStack([]));

  return (
    <ToastContext.Provider value={{ stack, setStack }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
