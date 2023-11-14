import React from "react";

const Menu = (props: { name: string; age: number; isMan: boolean }) => {
  return (
    <div>
      {props.name}
      {props.age}
      {props.isMan ? "is a man" : "is a woman"}
    </div>
  );
};

export default Menu;
