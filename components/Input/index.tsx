import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  layout?: "vertical" | "horizontal";
  isError?: boolean;
  isHint?: boolean;
  isOnlyNumber?: boolean;
}

const Input: FunctionComponent<InputProps> = props => {
  return (
    <div className={"flex"}>
      {props.label && <label>{props.label}</label>}
      <input type="text" />
    </div>
  );
};

export default Input;
