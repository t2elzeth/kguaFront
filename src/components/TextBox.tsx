import React from "react";

export type TextBoxProps = {};

const TextBox: React.FC<TextBoxProps> = ({ children }) => {
  return <div className="text-box">{children}</div>;
};

/* eslint-disable */
export default TextBox
