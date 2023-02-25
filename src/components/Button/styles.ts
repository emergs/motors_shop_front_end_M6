import { IButtonProps } from "./interfaces";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  z-index: ${({ zIndex }) => zIndex};
  cursor: pointer;

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

  padding: ${({ padding }) => padding};
  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverColor }) => hoverColor};
    border: ${({ hoverBorder }) => hoverBorder};
    outline: ${({ hoverOutline }) => hoverOutline};
  }
`;
