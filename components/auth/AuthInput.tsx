import { ChangeEvent, HTMLInputTypeAttribute, forwardRef } from "react";

export interface TextInputProps {
  className?: string;
  value: string;
  isError?: boolean;
  errorText?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const AuthInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className = "",
      value,
      isError,
      placeholder = "",
      errorText,
      type = "text",
      name,
      onChange,
      maxLength = 10,
    },
    ref,
  ) => {
    return (
      <div className="w-full relative">
        <div
          className={`${className} rounded-xl border border-solid  ${
            isError ? "border-red-500" : "border-semantic-grey-2"
          } rounded-lg p-2`}
        >
          <input
            type={type}
            name={name}
            className="w-full outline-none border-none h4 leading-normal placeholder:text-grey-400 pl-1"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            required
          />
        </div>
        {isError && (
          <div className="text-red-500 h5 px-2 absolute">{errorText}</div>
        )}
      </div>
    );
  },
);

export default AuthInput;
