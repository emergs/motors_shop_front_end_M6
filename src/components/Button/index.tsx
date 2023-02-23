import { StyledButton, IButtonProps } from "./styles";

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
  padding = "10px 5px",
  onClick,
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
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
