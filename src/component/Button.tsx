import { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState<number>(1);
  return (
    <div>
      <h2>{!onClick && value}</h2>
      <button onClick={onClick || (() => setValue(value + 1))}>{text}</button>
    </div>
  );
};

export default Button;
