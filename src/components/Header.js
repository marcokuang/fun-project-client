import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated && this.props.authenticated.email) {
      return (
        <Link to="/signout" className="item">
          Sign Out
        </Link>
      );
    } else {
      return (
        <React.Fragment>
          <NavLink to="/signin" className="item">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="item">
            Sign Up
          </NavLink>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <Menu fixed="top" inverted pointing secondary>
        {/* <Menu fixed="top" pointing secondary></Menu> */}
        <Menu.Item header>4 Fun Coder Project</Menu.Item>
        <NavLink exact to="/" className="item">
          Home
        </NavLink>
        {this.renderLinks()}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
