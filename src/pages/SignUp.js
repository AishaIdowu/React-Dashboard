import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <div className="SignUp">
      <h3>Sign up with your email</h3>
      <span className="account">
        Already have an account? <Link to={"/SignIn"}>Sign in</Link>
      </span>
      <form>
        <input
          className="text-field"
          type="text"
          placeholder="First name"
          name="First name"
        />
        <input
          type="text"
          className="text-field"
          placeholder="Last name"
          name="Last name"
        />
        <input
          type="email"
          className="text-field"
          placeholder="Email address"
          name="email"
        />
        <input
          type="password"
          className="text-field"
          placeholder="Password"
          name="password"
        />
        <input type="checkbox" className="checkbox"  />
        <span className="check"></span>
        <span>
          I agree to the <a href="#www">Terms of service</a> and{" "}
          <a href="#ww">Privacy policy</a>
        </span>
        <button className="signup_btn">Create account</button>
      </form>
    </div>

    </div>
    
  );
}
export default SignUp;
