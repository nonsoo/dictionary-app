import React from "react";
import styles from "./styles/meaning.module.css";

import Separator from "./separator";

// meaning is an array

const Meaning = ({ meanings }) => {
  return (
    <section className={styles.mainWrapper}>
      {meanings.map((meaning, index) => (
        <div key={index} className={styles.meaningWrapper}>
          <Separator separator_name={meaning.partOfSpeech} />

          <p className={styles.title}>Meaning</p>
          <ul className={styles.meaning}>
            {meaning.definitions.map((example, index_two) => (
              <li key={index_two} className={styles.meaning_item}>
                {example.definition}
              </li>
            ))}
          </ul>

          {meaning.synonyms.length > 0 && (
            <section className={styles.synonyms}>
              <p className={styles.synonyms_title}>Synonyms</p>
              <div className={styles.synonyms_word_wrapper}>
                {meaning.synonyms.map((synonym, index_three) => (
                  <p key={index_three} className={styles.synonyms_word}>
                    {synonym}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>
      ))}
    </section>
  );
};

export default Meaning;
