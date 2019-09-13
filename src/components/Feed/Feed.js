// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => {
  const darkMode = useDarkMode(false);
  console.log(darkMode);
  return (
    <div className={!darkMode.value ? styles['feed'] : styles['feedDark']}>
      {edges.map((edge) => (
        <div
          className={!darkMode.value ? styles['feed__item'] : styles['feed__item']}
          key={edge.node.fields.slug}
        >
          <div className={!darkMode.value ? styles['feed__item-meta'] : styles['feed__item-meta']}>
            <time
              className={
                !darkMode.value
                  ? styles['feed__item-meta-time']
                  : styles['feedDark__item-meta-time']
              }
              dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
            >
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span
              className={
                !darkMode.value
                  ? styles['feed__item-meta-divider']
                  : styles['feedDark__item-meta-divider']
              }
            />
            <span
              className={
                !darkMode.value
                  ? styles['feed__item-meta-category']
                  : styles['feedDark__item-meta-category']
              }
            >
              <Link
                to={edge.node.fields.categorySlug}
                className={
                  !darkMode.value
                    ? styles['feed__item-meta-category-link']
                    : styles['feedDark__item-meta-category-link']
                }
              >
                {edge.node.frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link
              className={
                !darkMode.value
                  ? styles['feed__item-title-link']
                  : styles['feedDark__item-title-link']
              }
              to={edge.node.fields.slug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>
            Read
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
