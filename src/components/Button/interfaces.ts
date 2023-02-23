import { HTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;

  border?: string;
  borderRadius?: string;
  outline?: string;

  // hover atributes
  hoverColor?: string;
  hoverBackground?: string;
  hoverBorder?: string;
  hoverBorderRadius?: string;
  hoverOutline?: string;
  padding?: string;
}
