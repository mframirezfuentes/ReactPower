import React, { useState } from "react";
import styles from "./signIn.module.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("error, we can't register to user");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.div}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.div}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
