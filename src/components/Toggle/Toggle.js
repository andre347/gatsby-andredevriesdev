import React from 'react';
import styles from './Toggle.module.scss';


const Toggle = ({ checked, onChange }) => (
  <span className={styles['toggle-control']}>
    <input
      className={styles['dmcheck']}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
