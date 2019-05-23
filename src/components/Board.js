import React, { Component } from "react";
import { Card } from "./Card";

class Board extends Component {
  render() {
    const mockIcons = [
      "fas fa-band-aid",
      "fas fa-cat",
      "fas fa-dragon",
      "far fa-clock",
      "fas fa-clock"
    ];

    const iconsComponents = mockIcons.map(iconName => (
      <Card iconName={iconName} />
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
