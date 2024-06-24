import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loaduser } from "../../../../actions/authAction";

import "./navbar.css";
import LoginRegister from "../login/LoginRegister";
import { Link } from "react-router-dom";
import Logo1 from "../../../../icons/logo 1.png";
import Logo2 from "../../../../icons/logo 2.png";
import NavBarDrop from "./NavBarDrop";

function NavBar() {
  const [dark, setDark] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [showDropSown, setShowDropDown] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  return (
    <>
      <div className={`nav-bar ${dark && "nav-black"}`}>
        <div className="logo-cont">
          <Link to="/">
            <img className="net-logo" src={Logo1} alt="" />
          </Link>
          <Link to="/">
            <img className="net-logo" src={Logo2} alt="" />
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="nav-name">Welcome {user.username}</div>
        ) : (
          <div className="nav-name">Welcome Guest</div>
        )}

        <NavItems
          showDropSown={showDropSown}
          setShowDropDown={setShowDropDown}
          profile={true}
        />
        <NavItems donate />
        {!isAuthenticated && <NavItems login setOpenLogin={setOpenLogin} />}
      </div>
      {!isAuthenticated && openLogin && (
        <LoginRegister openLogin={openLogin} setOpenLogin={setOpenLogin} />
      )}
    </>
  );
}

function NavItems(props) {
  const setShowDropDown = props.setShowDropDown;
  const showDropSown = props.showDropSown;
  return (
    <div
      onMouseEnter={() => props.profile && setShowDropDown(true)}
      onMouseLeave={() => props.profile && setShowDropDown(false)}
      className="nav-items"
    >
      <div className="nav-item">
        {props.profile && (
          <img
            className="profile-pic"
            src="https://www.svgrepo.com/show/87887/avatar.svg"
            alt="Profile"
          />
        )}
        {props.profile && (
          <NavBarDrop
            showDropSown={showDropSown}
            setShowDropDown={setShowDropDown}
          />
        )}

        {props.donate && (
          <img
            className="profile-pic"
            src="https://www.svgrepo.com/show/46063/dollar-symbol.svg"
            alt="Donate"
          />
        )}
        {props.login && (
          <img
            style={{ imageRendering: "-webkit-optimize-contrast" }}
            onClick={() => props.setOpenLogin(true)}
            className="l-profile-pic"
            src="https://www.clipartmax.com/png/full/48-489671_mobile-app-clipart.png"
            alt="Login/Logout"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
