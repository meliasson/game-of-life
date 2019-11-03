import React from "react";
import "./App.css";
import { startGame } from "./controller";

class App extends React.Component {
  componentDidMount() {
    startGame();
  }

  render() {
    return <canvas id="canvas"></canvas>;
  }
}

export default App;
