export type TextBoxProps = {};

const TextBox: React.FC<TextBoxProps> = ({ children }: any) => {
  return <div className="text-box">{children}</div>;
};

export default TextBox
