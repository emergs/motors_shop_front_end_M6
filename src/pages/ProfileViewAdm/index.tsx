import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalCreateAd from "../../components/Modais";
import { PageContainer, List, ModalContainer, Modal } from "./styles";
// import { vehicles } from "../../database";
import Button from "../../components/Button";
import { Fragment, useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { IUser, IVehicle } from "./interfaces";
import VehicleList from "../../components/List";
import api from "../../services/api";
import ReactDOM from "react-dom";
import FormCreateAd from "../../components/FormCreateAd/form";
import { SellerContext } from "../../contexts/Seller";
import { ModalsContext } from "../../contexts/Modals";
import { TiUser } from "react-icons/ti";

const AdmPage = () => {
  const { user, setUser } = useContext(SellerContext);
  const { showModalCreateAdd, handleModalCreateAdd } =
    useContext(ModalsContext);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [motorcicles, setMotorcicles] = useState<IVehicle[]>([]);
  const [cars, setCars] = useState<IVehicle[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("@MotorShopTOKEN");

    if (token) {
      const retrieveUser = async () => {
        await api
          .get("/users/profile", {
            headers: { Authorization: `Bearer ${token} ` },
          })
          .then((res) => {
            setUser(res.data);
            setVehicles(res.data.vehicles);
            setMotorcicles(
              res.data.vehicles.filter((v: IVehicle) => v.type === "motorcycle")
            );
            setCars(
              res.data.vehicles.filter((v: IVehicle) => v.type === "car")
            );
          })
          .catch((err) => console.error(err));
      };
      retrieveUser();
    }
  }, []);

  const auctionCardAtributes = {
    position: "relative",
    width: window.innerWidth > 700 ? "600px" : "300px",
    minWidth: "300px",
    imgHeight: "100%",
    imgWidth: "100%",
    detailsContainerHeight: "100%",
    detailsContainerPosition: "absolute",
    detailsContainerBackground: "var(--transparent-black)",
    detailsContainerJustifyContent: "space-between",
    infoColor: "var(--white-fixed)",
    priceColor: "var(--white-fixed)",
    titleColor: "var(--white-fixed)",
    timeDisplay: "inline-flex",
    buttonContainerBackground: "var(--color-brand-1)",
    buttonColor: "var(--white-fixed)",
    buttonBorder: "1px solid var(--white-fixed)",
    buttonHoverBackground: "var(--white-fixed)",
    buttonHoverColor: "var(--color-brand-1)",
  };

  return (
    <PageContainer>
      <Header />
      <section className="profile-cover">
        <div className="profile-card">
          <figure>
            <TiUser size={100} color={"white"} />
            {/* {user && user.profileImage ? (
              <img src={user.profileImage} alt="user profile photo" />
            ) : (
              <span>{user ? user.name : ""}</span>
              // <></>
            )} */}
          </figure>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <Button
            color="var(--color-brand-1)"
            border="2px solid var(--color-brand-1)"
            hoverBackground="var(--color-brand-1)"
            hoverBorder="2px solid var(--color-brand-1)"
            hoverColor="var(--white-fixed)"
            onClick={() => handleModalCreateAdd()}
          >
            Criar Anúncio
          </Button>
        </div>
      </section>
      <h2>Leilão</h2>
      <VehicleList
        vehicleList={vehicles}
        cardAtributes={auctionCardAtributes}
      />
      <h2>Carros</h2>
      <VehicleList vehicleList={cars} />
      <h2>Motos</h2>
      <VehicleList vehicleList={motorcicles} />
      <Footer />
      <>
        {showModalCreateAdd ? (
          ReactDOM.createPortal(
            <ModalContainer>
              <Modal>
                <FormCreateAd />
              </Modal>
            </ModalContainer>,
            document.getElementById("root") as HTMLElement
          )
        ) : (
          <></>
        )}
      </>
    </PageContainer>
  );
};

export default AdmPage;
