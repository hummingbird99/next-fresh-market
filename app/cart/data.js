"use client";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.color,
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontFamily: "NanumSquareNeo-Variable",
        marginRight: "2px",
      }}
    >
      {props.name}
    </button>
  );
};
