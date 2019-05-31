import React, { Component } from "react";

class Title extends Component {
  render() {
    return <p style={styles.textStyle}>{this.props.text}</p>;
  }
}

const styles = {
  textStyle: {
    fontSize: "48px",
    color: "#fff"
  }
};

export { Title };
