import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Auction from "../../components/Auction";
import ModalCreateAd from "../../components/Modais/ModalCreateAd";
import { PageContainer, List } from "./styles";
import { vehicles } from "../../database";
import Button from "../../components/Button";
import { Fragment, useEffect } from "react";
import Card from "../../components/Card";
import { IVehicle } from "./interfaces";

const AdmPage = () => {
  const motorcicles: IVehicle[] = vehicles.filter(
    (v) => v.category === "motorcicle"
  );
  const cars: IVehicle[] = vehicles.filter((v) => v.category === "car");

  return (
    <PageContainer>
      <Header />
      <Auction />

      <h2>Carros</h2>
      <List>
        {cars && cars.length > 0 ? (
          cars.map((c) => (
            <li>
              <Card {...c} />
            </li>
          ))
        ) : (
          <Fragment />
        )}
      </List>
      <h2>Motos</h2>
      <List>
        {motorcicles && motorcicles.length > 0 ? (
          motorcicles.map((m) => (
            <li>
              <Card {...m} />
            </li>
          ))
        ) : (
          <Fragment />
        )}
      </List>
      <Footer />
      {/* <ModalCreateAd /> descomentar para abrir/testar modal*/}
    </PageContainer>
  );
};

export default AdmPage;
