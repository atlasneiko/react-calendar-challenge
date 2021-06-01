import React from "react";
import ReactDOM from "react-dom";
import Intro from "./Intro";
import "./styles.css";

class App extends React.Component {
  render() {
    return <Intro />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
