import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
