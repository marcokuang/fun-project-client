import React from "react";
import { Link } from "react-router-dom";
import { Segment } from 'semantic-ui-react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Segment.Group horizontal>
          <Segment>
            <Link to="/">Home</Link>
          </Segment>
          <Segment>
            <Link to="/signin">Sign In</Link>
          </Segment>
          <Segment>
            <Link to="/signout">Sign Out</Link>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default Header;
