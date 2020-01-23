import React, { Component } from "react";
import "./styles.css";
import Test from "./component/Test";
import Routes from "./routes";

class App extends Component {
  r;
  render() {
    return (
      <div>
        <Test />
        <Routes />
      </div>
    );
  }
}
export default App;
