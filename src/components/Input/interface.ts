export interface InputProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  control: any;
  width?: string;
  height?: string;
  className?: string;
  defaultValue?: string;
  inputMode?: React.HTMLAttributes<HTMLLIElement>["inputMode"];
  onClick?: React.DOMAttributes<HTMLInputElement>["onClick"];
}
