"use client";

import styles from "./page.module.css";
import { AiOutlineBook, AiOutlineSearch } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { useState } from "react";

import IconContexts from "@utils/context/icon-context";
export default function Home() {
  const [userInput, setUserInput] = useState("");
  return (
    <main className={styles.main}>
      <div className={styles.navBar}>
        <IconContexts className={styles.book_icon}>
          <AiOutlineBook />
        </IconContexts>

        <p>serif</p>
        <BiMoon />
      </div>

      <div className={styles.searchWrappers}>
        <input
          className={styles.search}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <IconContexts className={styles.search_icon}>
          <AiOutlineSearch />
        </IconContexts>
      </div>

      <p>Keyboard</p>
    </main>
  );
}
