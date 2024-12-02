import React, { useState } from "react";
import "./Login.css";

const Login = ({ users, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.Username === username && u.Password === password
    );
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid username or password.");
      setUsername("");
      setPassword("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="form" autoComplete="off">
      <div className="control">
        <h1>Sign In</h1>
      </div>
      <div className="control block-cube block-input">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <div className="control block-cube block-input">
        <input
          type={passwordVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
      </div>
      <button
        type="button"
        className="btn block-cube block-cube-hover"
        onClick={handleLogin}
      >
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <span className="text">Log In</span>
      </button>
      {error && <p className="error">{error}</p>}
      <div className="credits">
        <a
          href="https://github.com/prathvitomar"
          target="_blank"
          rel="prathvi-singh-tomar"
        >
          <h2>Project by :</h2> <h1>Prathvi Singh Tomar</h1>
        </a>
      </div>
    </form>
  );
};

export default Login;
