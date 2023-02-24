import { IVehicle } from "../../pages/ProfileViewAdm/interfaces";
import { ICardAtributes } from "../Card/interfaces";

export interface IVehicleListProps {
  vehicleList: IVehicle[];
  cardAtributes?: ICardAtributes;
}
