import React, { useState } from "react";

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
    <div >
      <div>
        <form onSubmit={handleSubmit} >
          <div >
            <label htmlFor="username" >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required

            />
          </div>
          <div >
            <label htmlFor="password" >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required

            />
          </div>
          <div>
            <button type="submit" >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
