import React from "react";
import { Title } from "./components/Title";
import { Board } from "./components/Board";
import "./App.css";

class App extends React.Component {
  state = {
    gameEmotion: ""
  };

  _changeGameEmotion = gameEmotion => {
    this.setState({
      gameEmotion
    });
  };

  render() {
    return (
      <div style={styles.mainAppContainer}>
        <Title text={this.state.gameEmotion} />
        <Board changeGameEmotion={this._changeGameEmotion} />
      </div>
    );
  }
}

const styles = {
  mainAppContainer: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-color)"
  }
};

export default App;
