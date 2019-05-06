import React from "react";

export default function Button({ children, className, isDisabled }) {
  return (
    <button className={className} disabled={isDisabled}>
      {children}
    </button>
  );
}
