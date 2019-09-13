// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => {
  const darkMode = useDarkMode(false);

  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu__list']}>
        {menu.map((item) => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={
                !darkMode.value
                  ? styles['menu__list-item-link']
                  : styles['menuDark__list-item-link']
              }
              activeClassName={
                !darkMode.value
                  ? styles['menu__list-item-link--active']
                  : styles['menuDark__list-item-link--active']
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
