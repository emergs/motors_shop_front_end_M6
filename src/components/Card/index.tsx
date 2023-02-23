import { CardModel2 } from "./styles";
import { ICardProps } from "./interfaces";
import Button from "../Button";

const Card = ({ img, name, info, km, year, price }: ICardProps) => {
  const buttonAtributes = {
    border: "1px solid var(--grey-0)",
    padding: "10px",
    hoverBackground: "var(--grey-1)",
    hoverColor: "var(--white-fixed)",
  };

  return (
    <CardModel2>
      <img src={img[0]} alt={name} />
      <div className="details-container">
        <h3>{name}</h3>
        <p>{info.length > 90 ? info.slice(0, 85) + "..." : info}</p>
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
    </CardModel2>
  );
};

export default Card;
