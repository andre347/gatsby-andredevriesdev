// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import styles from './Tags.module.scss';

const Tags = ({ tags, tagSlugs }) => {
  const darkMode = useDarkMode(false);

  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tagSlugs
          && tagSlugs.map((slug, i) => (
            <li className={styles['tags__list-item']} key={tags[i]}>
              <Link
                to={slug}
                className={
                  !darkMode.value
                    ? styles['tags__list-item-link']
                    : styles['tagsDark__list-item-link']
                }
              >
                {tags[i]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tags;
