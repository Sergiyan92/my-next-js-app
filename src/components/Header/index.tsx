"use client";

import Logo from "./Logo";
import Menu from "./Menu";

const Header = (props: any) => {
  return (
    <header>
      {/* {props.name}
      {props.age}
      {props.isMan ? "is a man" : "is a woman"} */}
      <Logo />

      <Menu {...props} />
      {props.children}
    </header>
  );
};

export default Header;
