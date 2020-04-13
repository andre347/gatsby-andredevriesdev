// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./Author.module.scss";
import useDarkMode from "use-dark-mode";

const Author = ({ author, isIndex }) => {
  const darkMode = useDarkMode(false);

  return (
    <div className={!darkMode.value ? styles["author"] : styles["authorDark"]}>
      <Link to="/">
        <img
          src={withPrefix(author.photo)}
          className={styles["author__photo"]}
          width="75"
          height="75"
          alt={author.name}
        />
      </Link>

      {isIndex === true ? (
        <h1
          className={
            !darkMode.value
              ? styles["author__title"]
              : styles["authorDark__title"]
          }
        >
          <Link
            className={
              !darkMode.value
                ? styles["author__title-link"]
                : styles["authorDark__title-link"]
            }
            to="/"
          >
            {author.name}
          </Link>
        </h1>
      ) : (
        <h2
          className={
            !darkMode.value
              ? styles["author__title"]
              : styles["authorDark__title"]
          }
        >
          <Link
            className={
              !darkMode.value
                ? styles["author__title-link"]
                : styles["authorDark__title-link"]
            }
            to="/"
          >
            {author.name}
          </Link>
        </h2>
      )}
      <p className={styles["author__subtitle"]}>{author.bio}</p>
    </div>
  );
};

export default Author;
