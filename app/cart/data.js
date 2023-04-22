"use client";

export const Button = ({ children, onClick, color, name }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontFamily: "NanumSquareNeo-Variable",
        marginRight: "2px",
      }}
    >
      {children || name}
    </button>
  );
};
