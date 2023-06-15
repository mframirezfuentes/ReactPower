import React from "react";
import styles from './signInd.module.css'
import { MyButton } from "./Button";

export const SignInd = () => {
  return (
    <div className={styles.container}>
      <div>
        <label className="">Name</label>
        <input className={styles.input} />
      </div>
      <div>
        <label>Password</label>
        <input className={styles.input}/>
      </div>
      <MyButton name="Enviar"/>
    </div>
  );
};
