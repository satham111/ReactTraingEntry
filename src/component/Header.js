import React, { Component } from "react";

class Header extends Component {
  render() {
    var titlestyle = {
      fontSize: "25px",
      color: "white"
    };
    return (
      <div className="header1">
        <span>Add Details</span>
        <a href="/Home" className="float-right" style={titlestyle}>
          Query Screen?
        </a>
      </div>
    );
  }
}
export default Header;
