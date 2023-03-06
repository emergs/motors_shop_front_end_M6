import { createContext, ReactNode, useState } from "react";

interface IModalsContext {
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
  showModalAlerts: boolean;
  handleModalAlerts: () => void;
}

interface IModalsProviderProps {
  children: ReactNode;
}

export const ModalsContext = createContext<IModalsContext>(
  {} as IModalsContext
);

const ModalsProvider = ({ children }: IModalsProviderProps) => {
  const [showModalRegisterUserSuccess, setShowModalRegisterUserSuccess] =
    useState<boolean>(false);
  const [showModalEditProfile, setShowModalEditProfile] =
    useState<boolean>(false);
  const [showModalEditAddress, setShowModalEditAddress] =
    useState<boolean>(false);
  const [showModalCreateAdd, setShowModalCreateAdd] = useState(false);
  const [showModalAlerts, setShowModalAlerts] = useState<boolean>(false);

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

  const handleModalAlerts = () => {
    setShowModalAlerts(!showModalAlerts);
  };

  return (
    <ModalsContext.Provider
      value={{
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
        showModalAlerts,
        handleModalAlerts,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
