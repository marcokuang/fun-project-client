import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
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
      <Menu fixed="top">
        <Menu.Item header>4 Fun Coder Project</Menu.Item>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>{this.renderLinks()}</Menu.Item>
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
