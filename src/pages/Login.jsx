import React from "react";
import { useState } from "react";
import "../styles/styles.css";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple demo auth (replace with API later)
    if (email === "user@example.com" && password === "password123") {
      localStorage.setItem("auth", "true");
      navigate('/home');
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-layout">
      <div
        className="login-hero"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfNgLKImmwWHmIAubWwneKPnpitr9DUokUccazy-wXkwvsZ3drymghvMr15zoGBEVjuoagbt_PYLgIhOMJaAFMeiFZA8LZw4BRsIlRd2BRLUjLW6rm3kq4WdzGkO1qLstifAEuAwwQ6eJ-OEsEPKC2UYIOb9YS6v2WorpB5S4RSH_hLiOrxro3xalILpaghUiIIS1aj1UX_g4qOHRcOYnuXKTsp5NncwkpvO6H4oWUCIkXGh_joHVbXAmrwOTGrwbJ469NoyxHHGIu")',
        }}
      >
      </div>

      
        <div className="login-box">
          <h1>Welcome Back</h1>
          <p>Sign in to continue</p>

          <form className="login-box-form">
            
              <label>Email</label>
              <input
              type='text'
                className="abc"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            

            
              <label>Password</label>
              <input
                type="password"
                className="abc"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleSubmit} className="login-button">Sign In</button>
          </form>
        </div>
      
    </div>
  );
}
