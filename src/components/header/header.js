import React from "react";
import TextBox from "../text-box";
import "./header.css";

function Header(props = {}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <TextBox {...props.inputObj} />
    </header>
  );
}

export default Header;
