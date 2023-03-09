import { CardModel } from "./styles";
import { ICardProps } from "./interfaces";
import Button from "../Button";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";


const Card = ({
  id,
  type,
  imgCap,
  title,
  description,
  km,
  year,
  value,
//   time_auction,
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
      <img src={imgCap} alt={title} />
      <div className="details-container">
        <span className="time">
          {/* <FiClock /> {time_auction} */}
          <FiClock /> {"teste"}
        </span>
        <h3>{title}</h3>
        <p>{description.length > 85 ? description.slice(0, 75) + "..." : description}</p>
        <p>
          <span>{`km ${km}`}</span>
          <span>{year}</span>
          <span>R$ {value}</span>
        </p>
        <div className="button-container">
          <Button {...buttonAtributes}>Editar</Button>
          <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>Ver como</Link>
        </div>
      </div>
    </CardModel>
  );
};

export default Card;
