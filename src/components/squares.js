import React from "react";

export function Square(props) {
  const style = { color: "red" };
  return (
    <button
      data-cy={`square-${props.number}`}
      style={style}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
