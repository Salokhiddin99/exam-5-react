import React from "react";
import "./Login.scss";
function Login({ setOpen }) {
  const login = (evt) => {
    evt.preventDefault(); //password
    if (
      evt.target[0].value === "Salokhiddin99" &&
      evt.target[1].value === "19996875"
    ) {
      setOpen(true);
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-logo text-center">
          <i className="fa-brands fa-github text-dark login-icon"></i>
        </div>
        <p className="login-text text-center">Sign in to GitHub</p>
        <form className="login-form bg-light px-2" onSubmit={login}>
          <p className="username-text mt-3">Username or email address</p>
          <input type="text" className="username form-control" />
          <div className="login-password my-3 d-flex align-items-center justify-content-between">
            <span className="user-password">Password</span>
            <a href="#" className="forgot-password">
              Forgot password
            </a>
          </div>
          <input type="password" className="password form-control" />
          <button className="btn-success btn my-3 login-btn w-100">
            Sign in
          </button>
        </form>
        <div className="new">
          <span className="new-text">New to GitHub ?</span>
          <a href="#" className="new-account">
            Create an account
          </a>
        </div>
        <nav className="d-flex align-items-center login-nav w-100 justify-content-center">
          <a href="#" className="login-nav__text">
            Terms
          </a>
          <a href="#" className="login-nav__text">
            Privacy
          </a>
          <a href="#" className="login-nav__text">
            Security
          </a>
          <a href="#" className="login-nav__text change">
            Contact GitHub
          </a>
        </nav>
      </div>
    </>
  );
}

export default Login;
