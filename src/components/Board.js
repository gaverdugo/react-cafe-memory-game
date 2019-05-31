import React, { Component } from "react";
import { Card } from "./Card";
import cardObjects from "../helpers/cardObjects";
import shuffle from "../helpers/shuffle";

class Board extends Component {
  state = {
    boardElements: [],
    selected: [],
    matched: [],
    remaining: 5
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

  _resetGame = () => {
    this.setState({
      selected: [],
      matched: [],
      remaining: 5
    });
    this._shuffleCards();
    this.props.changeGameEmotion("🙂");
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
        this.setState(
          {
            matched: [...matched, selected[0], index],
            selected: [],
            remaining: this.state.remaining - 1
          },
          function() {
            if (this.state.remaining === 0) {
              this.props.changeGameEmotion("🎉");
              setTimeout(() => {
                this._resetGame();
              }, 2000);
            } else {
              this.props.changeGameEmotion("😃");
              setTimeout(() => {
                this.props.changeGameEmotion("🙂");
              }, 1000);
            }
          }
        );
      } else {
        this.setState({ selected: [selected[0], index] });
        this.props.changeGameEmotion("😕");
        setTimeout(() => {
          this.setState({ selected: [] });
          this.props.changeGameEmotion("🙂");
        }, 1000);
      }
    }
  };

  componentDidMount() {
    // shuffle the cards on mount
    this._shuffleCards();
    this.props.changeGameEmotion("🙂");
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

    return (
      <>
        <div style={styles.boardContainer}>{iconsComponents}</div>
        <button onClick={this._resetGame} style={styles.resetButton}>
          Reset Game
        </button>
      </>
    );
  }
}

const styles = {
  boardContainer: {
    height: "380px",
    width: "var(--board-width)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    backgroundColor: "var(--board-color)",
    borderRadius: "var(--subtle-border-radius)"
  },
  resetButton: {
    display: "inline-block",
    border: "none",
    padding: "1rem 2rem",
    margin: "1rem auto",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "var(--board-color)"
  }
};

export { Board };
