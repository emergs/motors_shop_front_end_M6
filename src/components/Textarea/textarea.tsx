import React from "react";
import { useController } from "react-hook-form";
import * as yup from "yup";
import { InputProps } from "./interface";
import { StyledLabel } from "./style";

const Textarea: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  control,
  height,
  width,
  defaultValue,
  className,
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
    <StyledLabel htmlFor={name} style={{ width }}>
      {label}
      <textarea
        style={{ height }}
        placeholder={placeholder}
        className={className}
        id={name}
        ref={ref}
        {...inputProps}
      ></textarea>
      {invalid && <span>{error?.message}</span>}
    </StyledLabel>
  );
};

export default Textarea;
