import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { ModalsContext } from "../../contexts/Modals";
import EditAddressModal from "./EditAddressModal";
import EditProfileModal from "./EditProfileModal";
import LoginModal from "./LoginModal";
import RegisterUserModal from "./RegisterUser";
import SucessRegisterUserModal from "./SuccessRegisterUserModal";



const Modals = () => {

  const {
    showModalRegisterUser,
    showModalLogin,
    showModalRegisterUserSuccess,
    showModalEditProfile,
    showModalEditAddress
  } = useContext(ModalsContext)


  return (
    <>
      <>
        {showModalRegisterUser &&
          ReactDOM.createPortal(
            <>
              <RegisterUserModal />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
      <>
        {showModalLogin &&
          ReactDOM.createPortal(
            <>
              <LoginModal />
            </>,
            document.getElementById("root") as HTMLElement
          )}
      </>
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
    </>
  );
};

export default Modals;