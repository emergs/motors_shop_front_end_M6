import { StyledButton, IButtonProps } from "./styles";

const Button = ({
  children,
  width,
  height,
  hoverColor,
  backgroundColor,
  hoverBackground,
  outline = "none",
  borderRadius = "5px",
  border = "none",
  hoverBorder = "none",
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
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
