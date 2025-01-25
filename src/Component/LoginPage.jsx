import React, { useState } from "react";
import "../Design/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import Svglogin from "./svgLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "harmit.temp26@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      setError("");
      console.log("Login successful!");
      navigate("/admindashboard"); 
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <Svglogin />

      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">Login</h1>
        
        {error && <p className="error-message">{error}</p>} 

        <label className="email-label" htmlFor="email">Email</label>
        <input
          className="email-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label className="password-label" htmlFor="password">Password</label>
        <input
          className="password-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <Link to="/register" className="register-link">Not a user? Register now</Link>
        
        <button className="login-button" type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
