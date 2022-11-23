import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'



const Form = () => {
    const [showPassword, setShowPassword] = useState(false)
    const showIcon = <FontAwesomeIcon icon={faEye} />
    const hideIcon = <FontAwesomeIcon icon={faEyeSlash} />
  return (
    <div className="container">
      <div className="form">
        <h1 className="header">Sign Up</h1>
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
            <input type={showPassword ? "text" : "password"} className="input" />
            <button className="eye" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? showIcon : hideIcon }</button>
            </div>
            <p>Password</p>
          </div>
        </div>
        <button type="button" className="btn btn-success w-25 my-3 ">Submit</button>
        <div className="alr">
        <a href=" #" class="link-primary">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default Form;