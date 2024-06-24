import React, { useState, useEffect } from "react";
import "./login.css";
// import axios from "axios";
// import { CSSTransition } from "react-transition-group";
import { FiLogIn } from "react-icons/fi";
import Register from "./Register";
import Login from "./Login";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

function LoginRegister({ openLogin, setOpenLogin }) {
  // const [isSwitch, setIsSwitch] = useState(false);
  const [activeMenu, setIsActiveMenu] = useState("login");

  const LoginUnderStyle = {
    borderBottom: activeMenu === "login" ? "2px #fff solid" : "",
  };
  const RegUnderStyle = {
    borderBottom: activeMenu === "register" ? "2px #fff solid" : "",
  };

  const bg_style = {
    height: activeMenu === "login" ? "480px" : "620px",
    transition: "all 200ms ease",
  };

  // const crossStyle = {
  //   transform:
  //     activeMenu === "login"
  //       ? "translateX(-670%) translateY(605%)"
  //       : "translateX(-670%) translateY(515%)",
  //   transition: "all 200ms ease",
  // };
  return (
    <>
      <div className="main-background">
        <div className="form-container" style={bg_style}>
          <div className="top-part">
            <button
              className="cross"
              onClick={() => setOpenLogin(false)}
              // style={crossStyle}
            >
              &times;
            </button>
            <div className="farm login-logo" alt="Logo">
              😍❤😊😘
            </div>
            <div className="l-g-part">
              <button
                className="login-text"
                onClick={() => setIsActiveMenu("login")}
                style={LoginUnderStyle}
              >
                LOGIN
              </button>
              <button
                className="register-text"
                onClick={() => setIsActiveMenu("register")}
                style={RegUnderStyle}
              >
                SIGN UP
              </button>
            </div>
          </div>
          <Register
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            activeMenu={activeMenu}
            setIsActiveMenu={setIsActiveMenu}
          />
          <Login
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            activeMenu={activeMenu}
            setIsActiveMenu={setIsActiveMenu}
          />
        </div>
        <div className="backgrounds" onClick={() => setOpenLogin(false)}></div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LoginRegister);
