import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { ModalsContext } from "../../../contexts/Modals";
import BaseModal from "../../BaseModal";
import { ModalSuccess } from "../SuccessRegisterUserModal/style";

const ModalAlerts = ({ error, title, content }: any) => {

  const { handleModalAlerts } = useContext(ModalsContext)



  return (
    <BaseModal>
      <ModalSuccess>
        <button className="close-modal" onClick={handleModalAlerts}>
          <RiCloseFill />
        </button>
        <span className="modal-success">{error}</span>
        <div>
          <span className="modal-success-title">{title}</span>
          <p className="modal-success-message">{content}</p>
        </div>
      </ModalSuccess>
    </BaseModal>
  );
};

export default ModalAlerts;