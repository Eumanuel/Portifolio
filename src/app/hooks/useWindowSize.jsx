// React Hook(s)
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkSize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [width]);

  return width;
};

export default useWindowSize;
