import React, { Component } from "react";

const Front = ({ flipped, icon }) => (
  <div style={{ ...styles.innerCard, opacity: flipped ? "1" : "0" }}>
    <i style={styles.iconStyle} className={icon} />
  </div>
);

const Back = ({ flipped }) => (
  <div style={{ ...styles.innerCard, opacity: flipped ? "0" : "1" }}>
    <i style={styles.iconStyle} className="fas fa-question" />
  </div>
);

class Card extends Component {
  render() {
    const { isSelected, isMatched, onSelect } = this.props;
    const flipped = isSelected || isMatched;
    const iconName = this.props.classes;

    return (
      <div
        style={{
          ...styles.cardContainer,
          transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`
        }}
        onClick={() => {
          if (!isSelected && !isMatched) {
            onSelect();
          }
        }}
      >
        <Front icon={iconName} flipped={flipped} />
        <Back flipped={flipped} />
      </div>
    );
  }
}

const styles = {
  iconStyle: {
    fontSize: "36px",
    color: "#fff"
  },
  cardContainer: {
    margin: "10px",
    backgroundColor: "var(--card-color)",
    borderRadius: "var(--subtle-border-radius)",
    transition: "transform var(--duration) var(--ease)"
  },
  innerCard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity var(--duration) var(--ease)"
  }
};

export { Card };
