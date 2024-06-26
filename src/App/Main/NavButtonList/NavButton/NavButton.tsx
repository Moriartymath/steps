import "./NavButton.css";
import * as React from "react";

type NavButtonProps = {
  text: string;
};

const NavButton: React.FC<NavButtonProps> = function ({ text }) {
  return <button className="button">{text}</button>;
};

export default NavButton;
