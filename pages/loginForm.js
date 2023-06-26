import React, { useState } from "react";

export default function Login() {

const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
//const [message, setMessage] = useState(null)

const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("error, we can't login the user");
    }
  };

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username"
              className="form-control w-100"
              placeholder="username" 
              required
              value={username} 
              onChange={(e) => setUserName(e.target.value)} 
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              className="form-control w-100" 
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        <button type="submit">Login</button>
    </form>
    );
};
            



