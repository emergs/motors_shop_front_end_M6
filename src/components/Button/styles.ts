import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

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
}

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  outline: ${({ outline }) => outline};

  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverColor }) => hoverColor};
    border: ${({ hoverBorder }) => hoverBorder};
    outline: ${({ hoverOutline }) => hoverOutline};
  }
`;
