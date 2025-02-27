import React from "react";

export const Heading75 = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-[3.91em] font-oswald font-medium leading-[0.95] tracking-[-0.0375em] mt-0 mb-0 ${className}`}
    >
      {children}
    </h3>
  );
};
