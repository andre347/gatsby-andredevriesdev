import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

import styles from './Toggle.module.scss';


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  console.log(darkMode)

  return (
    <div className={styles['dark-mode-toggle']}>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
