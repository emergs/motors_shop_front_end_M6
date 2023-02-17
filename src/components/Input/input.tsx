import React from "react";
import { useController } from "react-hook-form";
import * as yup from "yup";
import { InputProps } from "./interface";
import { StyledLabel } from "./style";

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  control,
  fontSize,
  height,
  width,
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    defaultValue: "",
    name,
    control,
    rules: {
      validate: async (value: string) => {
        try {
          const schema = yup.string().required().trim();
          await schema.validate(value);
          return true;
        } catch (err: any) {
          return err.message;
        }
      },
    },
  });

  return (
    <StyledLabel htmlFor={name} style={{ width }}>
      {label}
      <input
        style={{ fontSize, height }}
        type={type}
        id={name}
        ref={ref}
        {...inputProps}
      />
      {invalid && <span>{error?.message}</span>}
    </StyledLabel>
  );
};

export default Input;
