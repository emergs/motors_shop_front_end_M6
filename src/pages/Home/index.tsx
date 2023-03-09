import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { HomeContent, HomePage } from "./style"
import Auction from "../../components/Auction"
import { Card, List } from "../ProfileViewAdm/styles"
import { useEffect, useRef, useState } from "react"
import api from "../../services/api"

import { Link } from "react-router-dom"
import { IVehicles } from "./interfaces"


const Home = () => {
  const [vehicles, setVehicles] = useState<IVehicles[]>([])
  const [motorcicles, setMotorcicles] = useState<IVehicles[]>([])
  const [cars, setCars] = useState<IVehicles[]>([])
  const sectionCar = useRef<HTMLHeadingElement>(null)
  const sectionMotorcycle = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const retrieveUser = async () => {
      await api.get("/vehicle")
        .then((res) => {
          console.log(res.data)
          setVehicles(res.data);
          setMotorcicles(
            res.data.filter((v: IVehicles) => v.type === "motorcycle")
          );
          setCars(
            res.data.filter((v: IVehicles) => v.type === "car")
          );
        })
        .catch((err) => console.error(err));
    };
    retrieveUser();
  }, []);

  const goToCarSection = () => {
    sectionCar.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const goToMotorcycleSection = () => {
    sectionMotorcycle.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HomePage>
        <Header />
        <HomeContent>
          <div className="main">
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <span>Um ambiente feito para você explorar o seu melhor</span>
            <div className="main-buttons-group">
              <Button onClick={goToCarSection}>Carros</Button>
              <Button onClick={goToMotorcycleSection}>Motos</Button>
            </div>
          </div>
          <Auction />
          {/* <VehicleList vehicleList={vehicles} /> */}
          <div className="main-list-vehicles">
            <h2 id='car' ref={sectionCar}>Carros</h2>
            <List>
              {cars?.map((e) =>
                <li key={e.id}>
                  <Link to={`../product/${e.id}`} onClick={() => window.scrollTo(0,0)}>
                    <Card>
                      <img src={e.imageGalery.photos[0].urlImage} alt={e.title} />
                      <div className="details-container">
                        <h3>{e.title}</h3>
                        <p>
                          {e.description.length > 90 ? e.description.slice(0, 85) + "..." : e.description}
                        </p>
                        <p>
                          <span>{e.km}</span>
                          <span>{e.year}</span>
                          <span>{Number(
                                                e.value
                                            ).toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}</span>
                        </p>
                      </div>
                    </Card>
                  </Link>
                </li>
              )}
            </List>
            <h2 id='motorcycle' ref={sectionMotorcycle}>Motos</h2>
            <List>
              {motorcicles?.map((e) =>
                <li key={e.id}>
                  <Link to={`../product/${e.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <Card>
                      <img src={e.imageGalery.photos[0].urlImage} alt={e.title} />
                      <div className="details-container">
                        <h3>{e.title}</h3>
                        <p>
                          {e.description.length > 90 ? e.description.slice(0, 85) + "..." : e.description}
                        </p>
                        <p>
                          <span>{e.km}</span>
                          <span>{e.year}</span>
                          <span>{Number(
                                                e.value
                                            ).toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}</span>
                        </p>
                      </div>
                    </Card>k
                  </Link>
                </li>
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
