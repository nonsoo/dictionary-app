import React from "react";
import styles from "./styles/seperator.module.css";

const Separator = ({ separator_name }) => {
  return <p className={styles.separator}>{separator_name}</p>;
};

export default Separator;
