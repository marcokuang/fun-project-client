import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return <Link to="/signout">Sign Out</Link>;
    } else {
      return <Link to="/signin">Sign In</Link>;
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
