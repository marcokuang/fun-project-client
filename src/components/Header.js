import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Segment } from 'semantic-ui-react';
class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return <Link to="/signout">Sign Out</Link>
    } else {
      return <Link to="/signin">Sign In</Link>;
    }
  }

  render() {
    return (
      <div>
        <Segment.Group horizontal>
          <Segment>
            <Link to="/">Home</Link>
          </Segment>
          <Segment>
            {this.renderLinks()}
          </Segment>
        </Segment.Group>
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
