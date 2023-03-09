import { StyledButton } from "./styles";
import { IButtonProps } from "./interfaces";

const Button = ({
  children,
  width,
  height,
  hoverColor,
  backgroundColor = "transparent",
  hoverBackground,
  outline = "none",
  borderRadius = "5px",
  border = "1px solid transparent",
  hoverBorder = "1px solid transparent",
  color,
  type,
  padding = "10px 5px",
  position,
  left,
  right,
  top,
  bottom,
  zIndex,
  onClick,
  value,
  disabled,
}: IButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      outline={outline}
      color={color}
      padding={padding}
      position={position}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      zIndex={zIndex}
      onClick={onClick}
      type={type}
      value={value}
      {...(disabled ? { disabled } : "")}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
