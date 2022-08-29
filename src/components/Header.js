import React from "react";
import logo from "../images/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип" />
      </header>
    );
  }
}
export default Header;
