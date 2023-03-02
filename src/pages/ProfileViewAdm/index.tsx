import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Auction from "../../components/Auction";
import ModalCreateAd from "../../components/Modais";
import { PageContainer, List } from "./styles";
import { vehicles } from "../../database";
import Button from "../../components/Button";
import { Fragment, useEffect, useState } from "react";
import Card from "../../components/Card";
import { IVehicle } from "./interfaces";
import VehicleList from "../../components/List";

const AdmPage = () => {
  const motorcicles: IVehicle[] = vehicles.filter(
    (v) => v.category === "motorcicle"
  );
  const cars: IVehicle[] = vehicles.filter((v) => v.category === "car");

  const user = {
    name: "Samuel",
    last_name: "Leão",
    avatar: null,
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s`,
  };

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
            {user && user.avatar ? (
              <img src={user.avatar} alt="user profile photo" />
            ) : (
              <span>{user.name[0] + user.last_name[0]}</span>
            )}
          </figure>
          <h2>Samuel Leão</h2>
          <p>{user.bio}</p>
          <Button
            color="var(--color-brand-1)"
            border="2px solid var(--color-brand-1)"
            hoverBackground="var(--color-brand-1)"
            hoverBorder="2px solid var(--color-brand-1)"
            hoverColor="var(--white-fixed)"
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
      {/* <ModalCreateAd /> descomentar para abrir/testar modal */}
    </PageContainer>
  );
};

export default AdmPage;
