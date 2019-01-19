import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const logo = require("../images/logo.png");

const styleBrand = {
  color: "white"
};

const styleLogo = {
  height: "40px",
  "padding-left": "10px",
  "padding-top": "5px"
};

const navbarFlex = {
  display: "flex",
  "justify-content": "flex-start"
};

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <div style={navbarFlex}>
            <h1 style={styleBrand}>SmartShare</h1>
            <img src={logo} style={styleLogo} alt="Logo" />
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
