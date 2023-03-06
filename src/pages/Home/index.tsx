import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { HomeContent, HomePage } from "./style"
import Auction from "../../components/Auction"
import ModalCreateAd from "../../components/Modais";
import { Card, List } from "../ProfileViewAdm/styles"
import { vehicles } from "../../database"
import { Fragment } from "react"
import Modalteste from "../../components/Modais"
import Modals from "../../components/Modais"

const Home = () => {

  const buttonAtributes = {
    border: "1px solid var(--grey-0)",
    padding: "10px",
    hoverBackground: "var(--grey-1)",
    hoverColor: "var(--white-fixed)",
  };

  return (
    <>
      <HomePage>
        <Header />
        <HomeContent>
          <div className="main">
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <span>Um ambiente feito para você explorar o seu melhor</span>
            <div className="main-buttons-group">
              <Button>Carros</Button>
              <Button>Motos</Button>
            </div>
          </div>
          <Auction />
          {/* <VehicleList vehicleList={vehicles} /> */}
          <div className="main-list-vehicles">
            <h2 id="car">Carros</h2>
            <List>
              {vehicles.map((e) =>
                e.category === "car" ? (
                  <li key={e.id}>
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
                      </div>
                    </Card>
                  </li>
                ) : (
                  <Fragment />
                )
              )}
            </List>
            <h2 id="motorcycle">Motos</h2>
            <List>
              {vehicles.map((e) =>
                e.category === "motorcicle" ? (
                  <li key={e.id}>
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
                      </div>
                    </Card>
                  </li>
                ) : (
                  <Fragment />
                )
              )}
            </List>
          </div>
        </HomeContent>
        <Footer />
      </HomePage>
      {/* <Modals /> */}
    </>
  );
};

export default Home;
