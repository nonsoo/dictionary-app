import React from "react";
import styles from "./styles/toggle.module.css";

import useToggle from "@utils/hooks/use-toggle";

const Toggle = () => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div className={styles.toggle_outer} onClick={setToggle}>
      <div
        className={`${styles.toggle_inner} ${
          toggle ? styles.left : styles.right
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
