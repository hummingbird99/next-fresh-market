"use client";

export let hi = "안녕하세요";

export const Button = (props) => {
  return (
    <button
      onClick={props.click}
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
