import React from "react";
import styles from './signInd.module.css'

export const SignInd = () => {
  return (
    <div className={styles.container}>
      <div>
        <label>Name</label>
        <input />
      </div>
      <div>
        <label>Password</label>
        <input />
      </div>
    </div>
  );
};
