import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated && this.props.authenticated.email) {
      return (
        <Menu.Item as={NavLink} to="/signout">
          Sign Out
        </Menu.Item>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item as={NavLink} to="/signin">
            Sign In
          </Menu.Item>
          <Menu.Item as={NavLink} to="/signup">
            Sign Up
          </Menu.Item>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      // <Menu pointing secondary>
      <Fragment>
        <Menu
          fixed="top"
          pointing
          secondary
          style={{ backgroundColor: "white" }}
        >
          <Menu.Item header>4 Fun Coder Project</Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>

          {this.renderLinks()}
        </Menu>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
