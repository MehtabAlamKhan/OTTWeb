import React from "react";
import { connect } from "react-redux";

import profileIcon from "../../../../icons/profile.svg";
import logoutIcon from "../../../../icons/logout.svg";
import PsettingsIcon from "../../../../icons/profile-settings.svg";

import { logout } from "../../../../actions/authAction";

function NavBarDrop(props) {
  const setShowDropDown = props.setShowDropDown;
  const showDropSown = props.showDropSown;

  return (
    <div
      style={{
        transform: showDropSown
          ? "scale(1) translateX(-45%)"
          : "scale(0) translateX(-45%)",
        opacity: showDropSown ? 1 : 0,
      }}
      className="dropdown-container"
    >
      <div className="tri-wrapper">
        <div className="triangle-cont">
          <div className="triangle-inside"></div>
        </div>
      </div>
      <div className="drop-wrapper">
        <div className="profile-container">
          <div className="profile-img-cont">
            <img
              className="drop-profile-image"
              src={profileIcon}
              alt="Profile Image"
            />
          </div>
          <div className="profile-details-cont">
            <h3 className="drop-username">
              {props.isAuthenticated
                ? "@" + props.user.username
                : "Welcome Guest"}
            </h3>
            <p className="profile-membership">Membership - Free</p>
            <p className="profile-status">Status - Online</p>
          </div>
        </div>

        <div className="drop-left-container">
        <div className="options-details-cont">
            <div className="options-icon-cont">
              <img className="options-icon" src={PsettingsIcon} alt="Profile" />
            </div>
            <h3 className="options-details">Profile</h3>
          </div>

          <div className="options-details-cont">
            <div className="options-icon-cont">
              <img className="options-icon" src={logoutIcon} alt="Logout" />
            </div>
            <h3 className="options-details">Logout</h3>
          </div>
        </div>
        <div className="drop-right-container">
          

          <div onClick={props.logout} className="options-details-cont">
            <div className="options-icon-cont">
              <img className="options-icon" src={logoutIcon} alt="Logout" />
            </div>
            <h3 className="options-details">Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const matchStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(matchStateToProps, { logout })(NavBarDrop);
