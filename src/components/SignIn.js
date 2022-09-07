import React from "react";

function SignIn() {
  return (
    <section className="container">
      <div className="SignIn">
      <h3>Sign in with your email</h3>
      <span className="account">
        Don't have an account? <a href="#w">Sign up</a>
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
        <button>Continue</button>
      </form>
    </div>
    <a href="#w" className="Forgot">Forgot your password?</a>
    </section>
  );
}
export default SignIn;
