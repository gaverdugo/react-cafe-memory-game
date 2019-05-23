import React, { Component } from "react";
import { Card } from "./Card";
import cardObjects from "../helpers/cardObjects";
import shuffle from "../helpers/shuffle";

class Board extends Component {
  state = {
    boardElements: []
  };

  _shuffleCards = () => {
    // spread the card objects array twice into a containing array
    const boardElements = [...cardObjects, ...cardObjects];
    // shuffle the array
    shuffle(boardElements);
    // put the shuffled array in state
    this.setState({
      boardElements
    });
  };

  componentDidMount() {
    // shuffle the cards on mount
    this._shuffleCards();
  }

  render() {
    const iconsComponents = this.state.boardElements.map((object, index) => (
      <Card key={index} iconName={object.iconName} classes={object.classes} />
    ));

    return <div style={styles.boardContainer}>{iconsComponents}</div>;
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
