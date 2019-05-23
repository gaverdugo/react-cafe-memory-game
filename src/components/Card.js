import React, { Component } from "react";

class Card extends Component {
  state = {
    flipped: false
  };

  _flipCard() {
    this.setState(prevState => ({ flipped: !prevState.flipped }));
  }

  render() {
    const actualIconName = this.state.flipped
      ? this.props.classes
      : "fas fa-question";

    return (
      <div style={styles.cardContainer} onClick={this._flipCard.bind(this)}>
        <i style={styles.iconStyle} className={actualIconName} />
      </div>
    );
  }
}

const styles = {
  iconStyle: {
    "font-size": "36px",
    color: "#fff"
  },
  cardContainer: {
    height: "calc(50% - 20px)",
    width: "calc(20% - 20px)",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "background-color": "var(--card-color)",
    "border-radius": "var(--subtle-border-radius)"
  }
};

export { Card };
