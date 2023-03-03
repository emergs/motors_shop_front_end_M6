import { createContext, ReactNode, useState } from "react";

interface IModalsContext {
  handleOpenModalRegisterUser: () => void;
  handleCloseModalRegisterUser: () => void;
  showModalRegisterUser: boolean;
  handleOpenModalLogin: () => void;
  handleCloseModalLogin: () => void;
  showModalLogin: boolean;
  handleOpenModalRegisterUserSuccess: () => void;
  handleCloseModalRegisterUserSuccess: () => void;
  showModalRegisterUserSuccess: boolean;
  handleOpenModalEditProfile: () => void;
  handleCloseModalEditProfile: () => void;
  showModalEditProfile: boolean;
  handleOpenModalEditAddress: () => void;
  handleCloseModalEditAddress: () => void;
  showModalEditAddress: boolean;
  showModalCreateAdd: boolean;
  handleModalCreateAdd: () => void;
}

interface IModalsProviderProps {
  children: ReactNode;
}

export const ModalsContext = createContext<IModalsContext>(
  {} as IModalsContext
);

const ModalsProvider = ({ children }: IModalsProviderProps) => {
  const [showModalRegisterUser, setShowModalRegisterUser] =
    useState<boolean>(false);
  const [showModalLogin, setShowModalLogin] = useState<boolean>(false);
  const [showModalRegisterUserSuccess, setShowModalRegisterUserSuccess] =
    useState<boolean>(false);
  const [showModalEditProfile, setShowModalEditProfile] =
    useState<boolean>(false);
  const [showModalEditAddress, setShowModalEditAddress] =
    useState<boolean>(false);
  const [showModalCreateAdd, setShowModalCreateAdd] = useState(false);

  const handleOpenModalRegisterUser = () => {
    setShowModalRegisterUser(true);
  };

  const handleCloseModalRegisterUser = () => {
    setShowModalRegisterUser(false);
  };

  const handleOpenModalLogin = () => {
    setShowModalLogin(true);
  };

  const handleCloseModalLogin = () => {
    setShowModalLogin(false);
  };

  const handleOpenModalRegisterUserSuccess = () => {
    setShowModalRegisterUserSuccess(true);
  };

  const handleCloseModalRegisterUserSuccess = () => {
    setShowModalRegisterUserSuccess(false);
  };
  const handleOpenModalEditProfile = () => {
    setShowModalEditProfile(true);
  };

  const handleCloseModalEditProfile = () => {
    setShowModalEditProfile(false);
  };
  const handleOpenModalEditAddress = () => {
    setShowModalEditAddress(true);
  };

  const handleCloseModalEditAddress = () => {
    setShowModalEditAddress(false);
  };

  const handleModalCreateAdd = () => {
    setShowModalCreateAdd(!showModalCreateAdd);
  };

  return (
    <ModalsContext.Provider
      value={{
        handleCloseModalRegisterUser,
        handleOpenModalRegisterUser,
        showModalRegisterUser,
        handleCloseModalLogin,
        handleOpenModalLogin,
        showModalLogin,
        handleCloseModalRegisterUserSuccess,
        handleOpenModalRegisterUserSuccess,
        showModalRegisterUserSuccess,
        handleCloseModalEditProfile,
        handleOpenModalEditProfile,
        showModalEditProfile,
        handleCloseModalEditAddress,
        handleOpenModalEditAddress,
        showModalEditAddress,
        showModalCreateAdd,
        handleModalCreateAdd,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
