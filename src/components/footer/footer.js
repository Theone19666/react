import React from "react";
import "./footer.css";
import Filters from "../filters";
import Button from "../button";
import TodoCount from "../todo-count";

function Footer() {
  const buttonProps = {
    className: "clear-completed",
    text: "Clear completed",
  };
  return (
    <footer className="footer">
      <TodoCount />
      <Filters />
      <Button {...buttonProps} />
    </footer>
  );
}

export default Footer;
