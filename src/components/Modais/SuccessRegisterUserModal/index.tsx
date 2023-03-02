import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { ModalsContext } from "../../../contexts/Modals";
import BaseModal from "../../BaseModal";
import Button from "../../Button";
import { ModalSuccess } from "./style";

const SucessRegisterUserModal = () => {

  const { handleCloseModalRegisterUserSuccess, handleOpenModalLogin } = useContext(ModalsContext)

  const goToLogin = () => {
    handleCloseModalRegisterUserSuccess()
    handleOpenModalLogin()
  }

  return (
    <BaseModal>
      <ModalSuccess>
        <button className="close-modal" onClick={handleCloseModalRegisterUserSuccess}>
          <RiCloseFill />
        </button>
        <span className="modal-success">Sucesso!</span>
        <div>
          <span className="modal-success-title">Sua conta foi criada com sucesso!</span>
          <p className="modal-success-message">Agora você poderá ver seus negócios crescendo em grande escala</p>
          <Button
            width="132px"
            height="38px"
            backgroundColor="var(--color-brand-1)"
            color="var(--white-fixed)"
            onClick={() => goToLogin()}>Ir para o login</Button>
        </div>
      </ModalSuccess>
    </BaseModal>
  );
};

export default SucessRegisterUserModal;