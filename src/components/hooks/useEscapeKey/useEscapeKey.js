import { useContext, useEffect } from "react";
import { ToastContext } from "../../ToastProvider/ToastProvider";

function useEscapeKey() {
  const { setStack } = useContext(ToastContext);
  useEffect(() => {
    const handleKeyDownEvent = (e) => {
      if (e.key === "Escape") {
        setStack([]);
      }
    };

    window.addEventListener("keydown", handleKeyDownEvent);
    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [setStack]);
}

export default useEscapeKey;
