import React, { useState } from "react";
import styles from "./signInd.module.css";

export const SignIn = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.div}>
          <label htmlFor="nombre" className={styles.label}>
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.div}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
