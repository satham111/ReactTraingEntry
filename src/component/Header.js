import React, { Component } from "react";
import { NavItem, NavLink, Collapse } from "reactstrap";

class Header extends Component {
  render() {
    var titlestyle = {
      fontSize: "25px",
      color: "white"
    };
    return (
      <div id="test" className="header1">
        <span>Add Details</span>
        <a href="/add" className="float-right" style={titlestyle}>
          Query Screen?
        </a>
      </div>
    );
  }
}
export default Header;
