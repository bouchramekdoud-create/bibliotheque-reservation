 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login({ onAdminLogin }) {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin credentials (temporary demo account)
    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "Admin@123";

    // Admin Login
    if (
      emailOrUsername.trim() === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      onAdminLogin();
      navigate("/admin");
      return;
    }

    // Student Login
    const universityEmail = /^[a-zA-Z0-9._%+-]+@ensticp\.edu\.dz$/i;

    if (!universityEmail.test(emailOrUsername.trim())) {
      alert("Please enter a valid university email.");
      return;
    }

    alert(
      "Student login will be available after connecting the backend."
    );
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Welcome Back!</h1>

        <p>Login to your SmartLibrary account</p>

        <form onSubmit={handleLogin}>

          <label>Email or Admin Username</label>

          <input
            type="text"
            placeholder="Enter your email or username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        <p className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

        <Link to="/" className="back-home">
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;