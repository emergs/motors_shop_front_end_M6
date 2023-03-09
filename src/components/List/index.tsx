import { List, Container } from "./styles";
import Card from "../Card";
import { Fragment, useState } from "react";
import { IVehicleListProps } from "./interfaces";
import Button from "../Button";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";

const VehicleList = ({
  vehicleList,
  cardAtributes: cardProps,
}: IVehicleListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toRight = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const toLeft = () => {
    if (currentIndex <= vehicleList.length - 2)
      setCurrentIndex(currentIndex + 1);
  };
  return (
    <Container>
      {currentIndex > 0 ? (
        <Button
          hoverBackground="#edeafdb2"
          hoverBorder="1px solid var(--color-brand-1)"
          color="var(--color-brand-1)"
          position="absolute"
          zIndex="99999"
          left="20px"
          top="200px"
          onClick={toRight}
        >
          <RxDoubleArrowLeft size={40} />
        </Button>
      ) : (
        <></>
      )}
      {currentIndex < vehicleList.length - 1 ? (
        <Button
          hoverBackground="#edeafdb2"
          hoverBorder="1px solid var(--color-brand-1)"
          color="var(--color-brand-1)"
          position="absolute"
          zIndex="1"
          top="200px"
          right="20px"
          onClick={toLeft}
        >
          <RxDoubleArrowRight size={40} />
        </Button>
      ) : (
        <></>
      )}
      <List>
        {vehicleList && vehicleList.length > 0 ? (
          vehicleList.map((v, index) => (
            <motion.li
              key={index}
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <Card {...v} {...cardProps} />
            </motion.li>
          ))
        ) : (
          <span>Nenhum anúncio cadastrado</span>
        )}
      </List>
    </Container>
  );
};

export default VehicleList;
