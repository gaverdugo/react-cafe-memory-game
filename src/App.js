import React from "react";
import { Title } from "./components/Title";
import { Board } from "./components/Board";
import "./App.css";

function App() {
  return (
    <div style={styles.mainAppContainer}>
      <Board />
    </div>
  );
}

const styles = {
  mainAppContainer: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background-color)"
  },
  textStyle: {
    "font-size": "36px",
    color: "#fff"
  }
};

export default App;
