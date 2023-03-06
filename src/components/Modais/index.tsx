import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { ModalsContext } from "../../contexts/Modals";
import { SellerContext } from "../../contexts/Seller";
import EditAddressModal from "./EditAddressModal";
import EditProfileModal from "./EditProfileModal";
import LoginModal from "./LoginModal";
import ModalAlerts from "./ModalAlerts";
import RegisterUserModal from "./RegisterUser";
import SucessRegisterUserModal from "./SuccessRegisterUserModal";



const Modals = () => {

  const {
    showModalRegisterUserSuccess,
    showModalEditProfile,
    showModalEditAddress,
    showModalAlerts,
  } = useContext(ModalsContext)

  const {
    error
  } = useContext(SellerContext)


  return (
    <>
      <>
        {showModalRegisterUserSuccess &&
          ReactDOM.createPortal(
            <>
              <SucessRegisterUserModal />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
      <>
        {showModalEditProfile &&
          ReactDOM.createPortal(
            <>
              <EditProfileModal />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
      <>
        {showModalEditAddress &&
          ReactDOM.createPortal(
            <>
              <EditAddressModal />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
      <>
        {showModalAlerts &&
          ReactDOM.createPortal(
            <>
              <ModalAlerts error="Erro ao criar conta" title="erro" content="Tente novamente" />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
    </>
  );
};

export default Modals;