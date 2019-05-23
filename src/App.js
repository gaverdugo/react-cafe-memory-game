import React from "react";
import { Title } from "./components/Title";
import { Board } from "./components/Board";
import "./App.css";

function App() {
  return (
    <div style={styles.mainAppContainer}>
      <Title text={"goodbye world :("} />
      <Board />
    </div>
  );
}

const styles = {
  mainAppContainer: {
    display: "flex",
    "min-height": "100vh",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "background-color": "var(--background-color)"
  },
  textStyle: {
    "font-size": "36px",
    color: "#fff"
  }
};

export default App;
