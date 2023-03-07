import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { HomeContent, HomePage } from "./style"
import Auction from "../../components/Auction"
import { Card, List } from "../ProfileViewAdm/styles"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { IVehicle } from "../ProfileViewAdm/interfaces"


const Home = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [motorcicles, setMotorcicles] = useState<IVehicle[]>([])
  const [cars, setCars] = useState<IVehicle[]>([])

  useEffect(() => {
    const retrieveUser = async () => {
      await api.get("/vehicle")
        .then((res) => {
          console.log(res.data)
          setVehicles(res.data);
          setMotorcicles(
            res.data.filter((v: IVehicle) => v.type === "motorcycle")
          );
          setCars(
            res.data.filter((v: IVehicle) => v.type === "car")
          );
        })
        .catch((err) => console.error(err));
    };
    retrieveUser();
  }, []);

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
              {cars?.map((e) =>
                <li key={e.id}>
                  <Card>
                    <img src={e.imgCap} alt={e.title} />
                    <div className="details-container">
                      <h3>{e.title}</h3>
                      <p>
                        {e.description.length > 90 ? e.description.slice(0, 85) + "..." : e.description}
                      </p>
                      <p>
                        <span>{e.km}</span>
                        <span>{e.year}</span>
                        <span>R$ {e.price}</span>
                      </p>
                    </div>
                  </Card>
                </li>
              )}
            </List>
            <h2 id="motorcycle">Motos</h2>
            <List>
              {motorcicles?.map((e) =>
                <li key={e.id}>
                  <Card>
                    <img src={e.imgCap} alt={e.title} />
                    <div className="details-container">
                      <h3>{e.title}</h3>
                      <p>
                        {e.description.length > 90 ? e.description.slice(0, 85) + "..." : e.description}
                      </p>
                      <p>
                        <span>{e.km}</span>
                        <span>{e.year}</span>
                        <span>R$ {e.price}</span>
                      </p>
                    </div>
                  </Card>
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
