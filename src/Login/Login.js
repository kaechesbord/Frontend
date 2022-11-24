import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showIcon = <FontAwesomeIcon icon={faEye} />;
  const hideIcon = <FontAwesomeIcon icon={faEyeSlash} />;
  return (
    <div className="contained-log">
    <div className="container">
      <div className="form">
        <h1 className="header">Login</h1>
        <div className="lowerlogin2">
          <div className="email2">
            <input type="text" className="input" />
            <p>Email</p>
          </div>
          <div className="password-cont">
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
              />
              <button
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? showIcon : hideIcon}
              </button>
            </div>
            <p>Password</p>
          </div>
        </div>
        <div className="btncont">
          <button type="button" className="submit">
            Login
          </button>
        </div>
        <div className="alr">
          <a href=" #" class="link-primary">
           <Link to={"/register"}> Don't have an account? Register Here.</Link>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;