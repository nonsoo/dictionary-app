import React from "react";
import styles from "./styles/separator.module.css";

const Separator = ({ separator_name }) => {
  return <p className={styles.separator}>{separator_name}</p>;
};

export default Separator;
