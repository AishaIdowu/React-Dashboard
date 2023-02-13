import React from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="SignIn">
        <h3>Sign in with your email</h3>
        <span className="account">
          Don't have an account? <Link to={"/"}>Sign up</Link>
        </span>
        <form>
          <input
            
            type="text"
            className="text-field"
            placeholder="First name"
            name="First name"
            
          />
          <input
            type="password"
            className="text-field"
            placeholder="Password"
            name="password"
          />
          <button className="signin_btn" onClick={navigate("/Homepage")}>Continue</button>
        </form>
      </div>
      <a href="#w" className="Forgot">
        Forgot your password?
      </a>
    </div>
  );
}
export default SignIn;
