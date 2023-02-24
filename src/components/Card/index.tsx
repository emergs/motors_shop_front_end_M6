import { CardModel } from "./styles";
import { ICardProps } from "./interfaces";
import Button from "../Button";
import { FiClock } from "react-icons/fi";

const Card = ({
  img,
  name,
  info,
  km,
  year,
  price,
  time_auction,
  //atributes
  position = "relative",
  display = "flex",
  flexDirection = "column",
  width = "300px",
  height = "400px",
  minWidth = "300px",
  minHeight = "400px",
  imgWidth = "100%",
  imgHeight = "50%",
  detailsContainerWidth = "100%",
  detailsContainerHeight = "50%",
  detailsContainerPosition = "relative",
  detailsContainerBackground = "transparent",
  detailsContainerJustifyContent = "space-evenly",
  titleColor = "var(--grey-0)",
  buttonContainerBackground = "transparent",
  buttonBorder = "1px solid var(--grey-0)",
  buttonPadding = "10px",
  buttonHoverBackground = "var(--grey-1)",
  buttonColor = "",
  buttonBackground = "transparent",
  buttonHoverColor = "var(--white-fixed)",
  infoColor,
  priceColor,
  timeDisplay: spanDisplay,
}: ICardProps) => {
  const buttonAtributes = {
    border: buttonBorder,
    padding: buttonPadding,
    hoverBackground: buttonHoverBackground,
    hoverColor: buttonHoverColor,
    color: buttonColor,
    backgroundColor: buttonBackground,
  };

  return (
    <CardModel
      position={position}
      display={display}
      flexDirection={flexDirection}
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      detailsContainerWidth={detailsContainerWidth}
      detailsContainerHeight={detailsContainerHeight}
      detailsContainerPosition={detailsContainerPosition}
      detailsContainerBackground={detailsContainerBackground}
      detailsContainerJustifyContent={detailsContainerJustifyContent}
      titleColor={titleColor}
      infoColor={infoColor}
      priceColor={priceColor}
      buttonContainerBackground={buttonContainerBackground}
      timeDisplay={spanDisplay}
    >
      <img src={img[0]} alt={name} />
      <div className="details-container">
        <span className="time">
          <FiClock /> {time_auction}
        </span>
        <h3>{name}</h3>
        <p>{info.length > 85 ? info.slice(0, 75) + "..." : info}</p>
        <p>
          <span>{km}</span>
          <span>{year}</span>
          <span>R$ {price}</span>
        </p>
        <div className="button-container">
          <Button {...buttonAtributes}>Editar</Button>
          <Button {...buttonAtributes}>Ver como</Button>
        </div>
      </div>
    </CardModel>
  );
};

export default Card;
