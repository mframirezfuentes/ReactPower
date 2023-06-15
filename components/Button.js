import React from "react";
import styles from './button.module.css'

export const MyButton = (props) => {
  const { name } = props;
  return (
    <div>
      <button className={styles.text  }>{name}</button>
    </div>
  );
};
