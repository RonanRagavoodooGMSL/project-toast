import { useEffect } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    const handleKeyDownEvent = (e) => {
      if (e.key === "Escape") {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDownEvent);
    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [callback]);
}

export default useEscapeKey;
