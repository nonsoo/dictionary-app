"use client";

import styles from "./page.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";

import { useState } from "react";

import Navbar from "./components/navBar";

import IconContexts from "@utils/context/icon-context";

import Meaning from "./components/meaning";

import { test_word } from "@utils/constants/consts";
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
          <p className={styles.dictionary_word_word}>{test_word[0].word}</p>
          <p className={styles.dictionary_word_pronounce}>
            {test_word[0].phonetic}
          </p>
        </div>

        <IconContexts className={styles.play_icon}>
          <FiPlayCircle />
        </IconContexts>
      </section>
      <Meaning meanings={test_word[0].meanings} />

      <section className={styles.source}>
        <p className={styles.source_item}>Source</p>
        <a className={styles.source_item} href={`test_word[0].sourceUrls[0]`}>
          {test_word[0].sourceUrls[0]}
        </a>
      </section>
    </main>
  );
}
