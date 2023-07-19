"use client";

import styles from "./page.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

import Navbar from "./components/navBar";

import IconContexts from "@utils/context/icon-context";

import Meaning from "./components/meaning";

import axios from "axios";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  const [res, setRes] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
      );

      setRes(response.data);
    })();
  }, []);

  const get_word_from_API = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );
    // debugger;
    setRes(res.data);
  };
  if (!res) {
    return <p>Loading</p>;
  } else {
    return (
      <main className="mainC">
        <Navbar />

        <form className={styles.searchWrappers} onSubmit={get_word_from_API}>
          <input
            className={styles.search}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <button>
            <IconContexts className={styles.search_icon}>
              <AiOutlineSearch />
            </IconContexts>
          </button>
        </form>

        <section className={styles.dictionary_word}>
          <div>
            <p className={styles.dictionary_word_word}>{res[0].word}</p>
            <p className={styles.dictionary_word_pronounce}>
              {res[0].phonetic}
            </p>
          </div>

          <IconContexts className={styles.play_icon}>
            <FiPlayCircle />
          </IconContexts>
        </section>
        <Meaning meanings={res[0].meanings} />

        <section className={styles.source}>
          <p className={styles.source_item}>Source</p>
          <a className={styles.source_item} href={res[0].sourceUrls}>
            {res[0].sourceUrls[0]}
          </a>
        </section>
      </main>
    );
  }
}
