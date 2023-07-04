import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  const setterFunction = useCallback(() => {
    return setToggle((prev) => !prev);
  }, []);

  return [toggle, setterFunction];
};

export default useToggle;
