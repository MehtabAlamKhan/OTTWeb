import { useState } from "react";
import { useEffect } from "react";
import { BsCheck, BsX } from "react-icons/bs";
import "./login.css";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../../actions/authAction";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [ConfirmPassErrorMessage, setConfirmPassErrorMessage] = useState("");

  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);

  const [userVisited, setUserVisited] = useState(false);
  const [emailVisited, setEmailVisited] = useState(false);
  const [passVisited, setPassVisited] = useState(false);
  const [confirmPassVisited, setConfirmPassVisited] = useState(false);

  const [userStyle, setUserStyle] = useState({});
  const [emailStyle, setEmailStyle] = useState({});
  const [passStyle, setPassStyle] = useState({});
  const [confirmPassStyle, setConfirmPassStyle] = useState({});

  const [userTickStyle, setUserTickStyle] = useState({});
  const [emailTickStyle, setEmailTickStyle] = useState({});
  const [passTickStyle, setPassTickStyle] = useState({});
  const [confirmPassTickStyle, setConfirmPassTickStyle] = useState({});

  const [signDisable, setSignDisable] = useState(true);

  const activeMenu = props.activeMenu;

  var propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
  };

  // useEffect(() => {
  //   console.log(userVisited, emailVisited, passVisited);
  // }, [userVisited, emailVisited, passVisited]);

  useEffect(() => {
    if (userVisited) {
      setUserStyle({
        border: "2px #47ce12 solid",
      });
      if (username.length < 5) {
        setUserErrorMessage(`Username must contain at least 5 characters`);
        setUserError(true);
        setUserStyle({
          border: "2px red solid",
        });
        return;
      } else {
        setUserErrorMessage("");
        setUserError(false);
        // setSignDisable(false);
      }
      if (username.length > 20) {
        setUserErrorMessage("Username must contain at most 20 characters");
        setUserError(true);
        setUserStyle({
          border: "2px red solid",
        });
        return;
      } else {
        setUserErrorMessage("");
        setUserError(false);
        // setSignDisable(false);
      }
      axios
        .post("http://localhost:5000/api/users", {
          username: username,
        })
        .then(async (res) => {
          await console.log(res);
          setUserErrorMessage("");
          setUserError(false);
          // setSignDisable(false);
        })
        .catch(async (err) => {
          const msg = await err.response.data;
          console.log(msg);
          setUserErrorMessage(msg);
          setUserError(true);
          setUserStyle({
            border: "2px red solid",
          });
        });
    }
  }, [username]);

  useEffect(() => {
    if (emailVisited) {
      if (email.length < 6) {
        setEmailErrorMessage("Enter a valid email");
        setEmailError(true);
        setEmailStyle({
          border: "2px red solid",
        });
        return;
      }
      setEmailStyle({
        border: "2px #47ce12 solid",
      });
      axios
        .post("http://localhost:5000/api/users", {
          email: email,
        })
        .then(async (res) => {
          await console.log(res);
          setEmailErrorMessage("");
          setEmailError(false);
          // setSignDisable(false);
        })
        .catch(async (err) => {
          const msg = await err.response.data;
          console.log(msg);
          setEmailErrorMessage(msg);
          setEmailError(true);
          setEmailStyle({
            border: "2px red solid",
          });
        });
    }
  }, [email]);

  useEffect(() => {
    if (passVisited) {
      setPassStyle({
        border: "2px #47ce12 solid",
      });
      if (password.length < 6) {
        setPassErrorMessage("Password must contain at least 6 characters");
        setPassError(true);
        setPassStyle({
          border: "2px red solid",
        });
        return;
      }
      // else if (password.charAt((password.length-1)===" ")){
      //   console.log(password.charAt(password.length-1));
      //   setPassErrorMessage("Password must not contain space");
      //   setPassError(true);
      //   setPassStyle({
      //     border: "2px red solid",
      //   });
      //   return;
      // }
      else {
        setPassErrorMessage("");
        setPassError(false);
        // setSignDisable(false);
      }
    }
  }, [password]);

  useEffect(() => {
    if (confirmPassVisited) {
      setConfirmPassStyle({
        border: "2px #47ce12 solid",
      });
      if (confirmPass !== password) {
        setConfirmPassErrorMessage("Password Doesn't Match");
        setConfirmPassError(true);
        setConfirmPassStyle({
          border: "2px red solid",
        });
        return;
      } else {
        setConfirmPassErrorMessage("");
        setConfirmPassError(false);
      }
    }
  }, [confirmPass, password]);

  useEffect(() => {
    if (userVisited)
      setUserTickStyle({
        transform: "scale(1)",
        backgroundColor: userError ? "#ff0000" : "#1abe15",
      });
    if (emailVisited)
      setEmailTickStyle({
        transform: "scale(1)",
        backgroundColor: emailError ? "#ff0000" : "#1abe15",
      });
    if (passVisited)
      setPassTickStyle({
        transform: "scale(1)",
        backgroundColor: passError ? "#ff0000" : "#1abe15",
      });
    if (confirmPassVisited)
      setConfirmPassTickStyle({
        transform: "scale(1)",
        backgroundColor: confirmPassError ? "#ff0000" : "#1abe15",
      });

    if (userVisited && emailVisited && passVisited && confirmPassVisited) {
      if (userError || emailError || passError || confirmPassError) {
        setSignDisable(true);
      } else setSignDisable(false);
    }
  }, [userError, passError, emailError, confirmPassError]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    props.register(newUser);
  };
  const errorStyle = (e) => {
    const style = {
      transform: "translateY(0%)",
      transition: "all 200ms ease",
    };
    if (e) return style;
  };

  return (
    <CSSTransition
      in={activeMenu === "register"}
      unmountOnExit
      timeout={500}
      classNames="menu-register"
    >
      <div className="menu">
        <form className="forms-register" onSubmit={onSubmitHandler} noValidate>
          <div className="input-part">
            <input
              className="username"
              autoComplete="true"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
                setUserVisited(true);
              }}
              style={userStyle}
            ></input>
            <div className="user-bg-tick-svg" style={userTickStyle}>
              {userError ? <BsX /> : <BsCheck />}
            </div>
            <div className="user-error-msg-cont">
              <div className="user-error-msg" style={errorStyle(userError)}>
                {userErrorMessage}
              </div>
            </div>
            <input
              className="email"
              autoComplete="true"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailVisited(true);
              }}
              style={emailStyle}
            ></input>
            <div className="email-bg-tick-svg" style={emailTickStyle}>
              {emailError ? <BsX /> : <BsCheck />}
            </div>
            <div className="email-error-msg-cont">
              <div className="email-error-msg" style={errorStyle(emailError)}>
                {emailErrorMessage}
              </div>
            </div>
            <input
              className="password"
              autoComplete="true"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPassVisited(true);
              }}
              style={passStyle}
            ></input>
            <div className="pass-bg-tick-svg" style={passTickStyle}>
              {passError ? <BsX /> : <BsCheck />}
            </div>
            <div className="pass-error-msg-cont">
              <div className="pass-error-msg" style={errorStyle(passError)}>
                {passErrorMessage}
              </div>
            </div>
            <input
              className="confirm-password"
              autoComplete="true"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPass(e.target.value);
                setConfirmPassVisited(true);
              }}
              style={confirmPassStyle}
            ></input>
            <div className="c-pass-bg-tick-svg" style={confirmPassTickStyle}>
              {confirmPassError ? <BsX /> : <BsCheck />}
            </div>
            <div className="c-pass-error-msg-cont">
              <div
                className="c-pass-error-msg"
                style={errorStyle(confirmPassError)}
              >
                {ConfirmPassErrorMessage}
              </div>
            </div>
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={signDisable}
            // onClick={() => setSignDisable(true)}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register })(Register);
