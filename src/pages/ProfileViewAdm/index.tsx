import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Auction from "../../components/Auction";
import ModalCreateAd from "../../components/Modais/ModalCreateAd";
import { PageContainer, List, Card } from "./styles";
import { vehicles } from "../../database";
import Button from "../../components/Button";
import { Fragment } from "react";

const AdmPage = () => {
  const buttonAtributes = {
    border: "1px solid var(--grey-0)",
    padding: "10px",
    hoverBackground: "var(--grey-1)",
    hoverColor: "var(--white-fixed)",
  };
  return (
    <PageContainer>
      <Header />
      <Auction />
      <h2>Carros</h2>
      <List>
        {vehicles.map((e) =>
          e.category === "car" ? (
            <li>
              <Card>
                <img src={e.img[0]} alt={e.name} />
                <div className="details-container">
                  <h3>{e.name}</h3>
                  <p>
                    {e.info.length > 90 ? e.info.slice(0, 85) + "..." : e.info}
                  </p>
                  <p>
                    <span>{e.km}</span>
                    <span>{e.year}</span>
                    <span>R$ {e.price}</span>
                  </p>
                  <div className="button-container">
                    <Button {...buttonAtributes}>Editar</Button>
                    <Button {...buttonAtributes}>Ver como</Button>
                  </div>
                </div>
              </Card>
            </li>
          ) : (
            <Fragment />
          )
        )}
      </List>
      <h2>Motos</h2>
      <List>
        {vehicles.map((e) =>
          e.category === "motorcicle" ? (
            <li>
              <Card>
                <img src={e.img[0]} alt={e.name} />
                <div className="details-container">
                  <h3>{e.name}</h3>
                  <p>
                    {e.info.length > 90 ? e.info.slice(0, 85) + "..." : e.info}
                  </p>
                  <p>
                    <span>{e.km}</span>
                    <span>{e.year}</span>
                    <span>R$ {e.price}</span>
                  </p>
                  <div className="button-container">
                    <Button {...buttonAtributes}>Editar</Button>
                    <Button {...buttonAtributes}>Ver como</Button>
                  </div>
                </div>
              </Card>
            </li>
          ) : (
            <Fragment />
          )
        )}
      </List>
      <Footer />
      {/* <ModalCreateAd /> descomentar para abrir/testar modal*/}
    </PageContainer>
  );
};

export default AdmPage;
