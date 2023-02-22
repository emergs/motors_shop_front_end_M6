import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalEditAd from "../../components/Modais/ModalEditAd";
import { HomePage } from "./style";

const Home = () => {
  return (
    <HomePage>
      <Header />
      <Footer />
      {/* <ModalEditAd /> descomentar para abrir/testar o modal */}
    </HomePage>
  );
};

export default Home;
