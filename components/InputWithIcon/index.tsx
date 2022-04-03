import { InputHTMLAttributes } from "react";

export const InputWithIcon: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...rest
}) => {
  return (
    <>
      <div className="relative">
        <label htmlFor={rest.name}>{children}</label>
        <input {...rest} />
      </div>
    </>
  );
};
