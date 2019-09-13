// @flow strict
import React from 'react';
import styles from './Icon.module.scss';
import useDarkMode from 'use-dark-mode';

const Icon = ({ name, icon }) => {
    const darkMode = useDarkMode(false);

    return (
      <svg className={!darkMode.value ? styles['icon'] : styles['iconDark'] } viewBox={icon.viewBox}>
        <title>{name}</title>
        <path d={icon.path} />
      </svg>
  )
}

export default Icon;
