import React from "react";

export default function Button({ children, bgColor, textColor, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
