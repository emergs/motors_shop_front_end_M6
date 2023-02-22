import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalCreateAd from "../../components/Modais/ModalCreateAd";
import { HomePage } from "./style";

const Home = () => {
  return (
    <HomePage>
      <Header />
      <Footer />
      {/* <ModalCreateAd /> descomentar para abrir/testar modal*/}
    </HomePage>
  );
};

export default Home;
