import React from "react";
import { useController } from "react-hook-form";
import * as yup from "yup";
import { InputProps } from "./interface";
import { StyledLabel } from "./style";

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  control,
  height,
  width,
  inputMode,
  className,
  defaultValue,
  onClick,
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    defaultValue: defaultValue,
    name,
    control,
    rules: {
      validate: async (value: string) => {
        try {
          const schema = yup.string().required().trim();
          await schema.validate(value);
          return true;
        } catch (err: yup.ValidationError | any) {
          return err.message;
        }
      },
    },
  });

  return (
    <StyledLabel
      htmlFor={name}
      style={{ width }}
      key={name}
      className={className}
    >
      {label}
      <input
        style={{ height }}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        onClick={onClick}
        id={name}
        ref={ref}
        {...inputProps}
      />
      {invalid && <span>{error?.message}</span>}
    </StyledLabel>
  );
};

export default Input;
