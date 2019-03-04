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
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component3
              </button>
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

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0",
  cursor: "pointer"
};

export default Component2;
