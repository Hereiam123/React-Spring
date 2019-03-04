import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                hic. Aliquam incidunt quasi architecto! Repellendus neque,
                voluptatum explicabo ad qui, animi placeat ducimus consequuntur
                nesciunt perferendis corporis illum atque dolorem.
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

export default Component2;
