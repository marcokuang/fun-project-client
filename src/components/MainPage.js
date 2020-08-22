import React from "react";
import { connect } from "react-redux";

class MainPage extends React.Component {
  render() {
    console.log(this.props.user);
    if (this.props.user) {
      return <div>Welcome {this.props.user} !</div>;
    } else {
      return <div>Main Page is here</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.authenticated.email,
  };
};

export default connect(mapStateToProps)(MainPage);
