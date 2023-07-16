import React from "react";
import styles from "../page.module.css";

import { AiOutlineBook } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";

import IconContexts from "@utils/context/icon-context";

import Toggle from "./toggle";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <IconContexts className={styles.book_icon}>
        <AiOutlineBook />
      </IconContexts>

      <p>serif</p>
      <Toggle />
      <BiMoon />
    </div>
  );
};

export default Navbar;
