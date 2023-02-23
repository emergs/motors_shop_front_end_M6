import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { HomeContent, HomePage } from "./style"
import Auction from "../../components/Auction"
import ModalCreateAd from "../../components/Modais/ModalCreateAd";

const Home = () => {

  return (
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
      </HomeContent>
      <Footer />
      {/* <ModalCreateAd /> descomentar para abrir/testar modal*/}
    </HomePage>
  );
};

export default Home;
