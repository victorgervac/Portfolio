import React from "react";
import { COLORS, PADDING, STYLES } from "../styles/styles";

const Movies = () => {
  return (
    // First bracket is saying this javascript code
    <div
      style={
        // First bracket is saying this javascript code
        { ...styles.container, ...styles.green, ...styles.red } // creating a new object
      }
    >
      <h1>Movies</h1>
      {/* not creating a new object don't need extra {} */}
      {/* these two are the same */}
      <p className="red" style={styles.green}>
        list here
      </p>
      {/* <p style={{ color: "green", fontSize: "10px", cursor: "pointer" }}>here <//p>*/}
      <div style={STYLES.CONTAINER}>
        <p>Hello</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: PADDING.MEDIUM,
    borderRadius: "5px",
    border: `6px solid ${COLORS.PRIMARY}`,
  },

  red: {
    color: `${COLORS.ALERT}`,
  },
  green: {
    color: `${COLORS.SUCCESS}`,
    fontSize: "10px",
    cursor: "pointer",
  },
};

export default Movies;

// how to go from to one ...$for
// container: {
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid red",
// },

// red: {
//   color: "red",
// },

// // => {}
// {...container, ...red}
