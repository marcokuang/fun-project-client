import React from "react";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";

export default (props) => {
  return (
    <div>
      <Segment.Group>
        <Segment padded>
          <Header />
        </Segment>
        <Segment padded>{props.children}</Segment>
      </Segment.Group>
    </div>
  );
};
