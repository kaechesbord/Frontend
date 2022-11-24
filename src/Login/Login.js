import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showIcon = <FontAwesomeIcon icon={faEye} />;
  const hideIcon = <FontAwesomeIcon icon={faEyeSlash} />;
  return (
    <div className="container">
      <div className="form">
        <h1 className="header">Login</h1>
        <div className="upperlogin">
          <div className="fname">
            <input type="text" className="input" />
            <p>First Name</p>
          </div>
          <div className="lname">
            <input type="text" className="input" />
            <p>Last Name</p>
          </div>
        </div>
        <div className="lowerlogin">
          <div className="email">
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
            Submit
          </button>
        </div>
        <div className="alr">
          <a href=" #" class="link-primary">
            Already have an account? Login Here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;