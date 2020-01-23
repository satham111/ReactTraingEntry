import React, { Component } from "react";
import "./styles.css";
import Test from "./component/Test";
import Routes from "./routes";
import Headers from "./component/Header";

class App extends Component {
  r;
  render() {
    return (
      <div>
        <Headers />
        <Test />
        <Routes />
      </div>
    );
  }
}
export default App;
