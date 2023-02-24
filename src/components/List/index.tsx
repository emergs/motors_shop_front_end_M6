import { List } from "./styles";
import Card from "../Card";
import { Fragment } from "react";
import { IVehicleListProps } from "./interfaces";

const VehicleList = ({
  vehicleList,
  cardAtributes: cardProps,
}: IVehicleListProps) => {
  return (
    <>
      <List>
        {vehicleList && vehicleList.length > 0 ? (
          vehicleList.map((v, index) => (
            <li key={index}>
              <Card {...v} {...cardProps} />
            </li>
          ))
        ) : (
          <Fragment />
        )}
      </List>
    </>
  );
};

export default VehicleList;
