import React, { Component } from "react";
import { Card } from "./Card";
import cardObjects from "../helpers/cardObjects";
import shuffle from "../helpers/shuffle";

class Board extends Component {
  state = {
    boardElements: [],
    selected: [],
    matched: []
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

  _handleCardClick = index => {
    const { boardElements, selected, matched } = this.state;
    if (selected.length === 0) {
      this.setState({
        selected: [index]
      });
    } else if (selected.length === 1) {
      const isAMatch =
        boardElements[selected[0]].iconName === boardElements[index].iconName;
      if (isAMatch) {
        this.setState({
          matched: [...matched, selected[0], index],
          selected: []
        });
      } else {
        this.setState({ selected: [selected[0], index] });
        setTimeout(() => {
          this.setState({ selected: [] });
        }, 500);
      }
    }
  };

  componentDidMount() {
    // shuffle the cards on mount
    this._shuffleCards();
  }

  render() {
    const { boardElements, selected, matched } = this.state;
    const iconsComponents = boardElements.map((object, index) => (
      <Card
        key={index}
        iconName={object.iconName}
        classes={object.classes}
        onSelect={() => this._handleCardClick(index)}
        isSelected={selected.includes(index)}
        isMatched={matched.includes(index)}
      />
    ));

    return <div style={styles.boardContainer}>{iconsComponents}</div>;
  }
}

const styles = {
  boardContainer: {
    height: "380px",
    width: "var(--board-width)",
    display: "flex",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
    backgroundColot: "var(--board-color)",
    borderRadius: "var(--subtle-border-radius)"
  },
  iconStyle: {
    "font-size": "36px",
    color: "#fff"
  }
};

export { Board };
