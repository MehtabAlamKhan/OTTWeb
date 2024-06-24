import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import "../components/HScomps/Components/NavBar/navbar.css"

function Name(props) {
  var propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.string,
  };

  return props.isAuthenticated ? (
    <div className="nav-name">Welcome {props.user.username}</div>
  ) : (
    <div className="nav-name">Welcome Guest</div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Name);
