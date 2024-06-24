import React, { useState, useEffect } from "react";
import "./login.css";
// import axios from "axios";
import { CSSTransition } from "react-transition-group";
import { BsCheck, BsX } from "react-icons/bs";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { login } from "../../../../actions/authAction.js";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const [userStyle, setUserStyle] = useState({});
  const [passStyle, setPassStyle] = useState({});

  const [userTickStyle, setUserTickStyle] = useState({});
  const [passTickStyle, setPassTickStyle] = useState({});

  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");

  const activeMenu = props.activeMenu;
  const errorMsg = props.error.msg;

  var propTypes = {
    logout: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
  };

  useEffect(() => {
    setUserError(false);
    setUserErrorMessage("");
    setUserStyle({});
    setUserTickStyle({});

    setPassErrorMessage("");
    setPassError(false);
    setPassStyle({});
    setPassTickStyle({});
  }, [username, password]);

  function loginErrorCheckHandler() {
    if (errorMsg === "Password and Username Does not Match") {
      setPassError(true);
      setPassStyle({ border: "2px red solid" });
      setPassErrorMessage(errorMsg);
      setPassTickStyle({
        transform: "scale(1)",
        backgroundColor: "#ff0000",
      });
      return;
    }
    if (errorMsg === "User not found") {
      setUserError(true);
      setUserStyle({ border: "2px red solid" });
      setUserErrorMessage(errorMsg);
      setUserTickStyle({
        transform: "scale(1)",
        backgroundColor: "#ff0000",
      });
      return;
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!username) {
      setUserError(true);
      setUserStyle({ border: "2px red solid" });
      setUserErrorMessage("You must be having some username");
      setUserTickStyle({
        transform: "scale(1)",
        backgroundColor: "#ff0000",
      });
      return;
    }
    if (!password) {
      setPassError(true);
      setPassStyle({ border: "2px red solid" });
      setPassErrorMessage("Input Password");
      setPassTickStyle({
        transform: "scale(1)",
        backgroundColor: "#ff0000",
      });
      return;
    }

    const user = {
      username: username,
      password: password,
    };
    props.login(user);
  };

  const errorStyle = {
    transform: "translateY(0%)",
    transition: "all 200ms ease",
  };

  return (
    <CSSTransition
      in={activeMenu === "login"}
      unmountOnExit
      timeout={500}
      classNames="menu-login"
    >
      <div className="menu">
        <form className="forms-login" onSubmit={onSubmitHandler}>
          <div className="input-part">
            <input
              className="username"
              autoComplete="true"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              style={userStyle}
            ></input>
            <div className="user-bg-tick-svg" style={userTickStyle}>
              {userError ? <BsX /> : <BsCheck />}
            </div>
            <div className="user-error-msg-cont">
              <div className="user-error-msg" style={errorStyle}>
                {userErrorMessage}
              </div>
            </div>
            <input
              className="password"
              autoComplete="true"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={passStyle}
            ></input>
            <div className="email-bg-tick-svg" style={passTickStyle}>
              {passError ? <BsX /> : <BsCheck />}
            </div>
            <div className="email-error-msg-cont">
              <div className="email-error-msg" style={errorStyle}>
                {passErrorMessage}
              </div>
            </div>
          </div>
          <button
            onClick={loginErrorCheckHandler}
            className="submit-button"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
