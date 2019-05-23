import React, { Component } from "react";
import { Card } from "./Card";
import cardObjects from "../helpers/cardObjects";

class Board extends Component {
  render() {
    const iconsComponents = cardObjects.map(object => (
      <Card iconName={object.iconName} classes={object.classes} />
    ));

    return (
      <div style={styles.boardContainer}>
        {iconsComponents}
        {iconsComponents}
      </div>
    );
  }
}

const styles = {
  boardContainer: {
    height: "380px",
    width: "var(--board-width)",
    display: "flex",
    "justify-content": "space-around",
    "align-content": "space-around",
    "flex-wrap": "wrap",
    "background-color": "var(--board-color)",
    "border-radius": "var(--subtle-border-radius)"
  },
  iconStyle: {
    "font-size": "36px",
    color: "#fff"
  }
};

export { Board };
