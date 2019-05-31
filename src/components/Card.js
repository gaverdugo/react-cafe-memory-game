import React, { Component } from "react";

class Card extends Component {
  render() {
    const { isSelected, isMatched, onSelect } = this.props;
    const actualIconName =
      isSelected || isMatched ? this.props.classes : "fas fa-question";

    return (
      <div
        style={styles.cardContainer}
        onClick={() => {
          if (!isSelected && !isMatched) {
            onSelect();
          }
        }}
      >
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    backgroundColor: "var(--card-color)",
    borderRadius: "var(--subtle-border-radius)"
  }
};

export { Card };
