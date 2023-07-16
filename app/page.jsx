"use client";

import styles from "./page.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";

import { useState } from "react";

import Navbar from "./components/navBar";

import IconContexts from "@utils/context/icon-context";
import Separator from "./components/separator";
export default function Home() {
  const [userInput, setUserInput] = useState("");
  return (
    <main className="mainC">
      <Navbar />

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

      <section className={styles.dictionary_word}>
        <div>
          <p className={styles.dictionary_word_word}>Keyboard</p>
          <p className={styles.dictionary_word_pronounce}>/sdsdsd:ds/</p>
        </div>

        <IconContexts className={styles.play_icon}>
          <FiPlayCircle />
        </IconContexts>
      </section>

      <Separator seperator_name="Noun" />
    </main>
  );
}
