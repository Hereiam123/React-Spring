import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -10 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
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

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
