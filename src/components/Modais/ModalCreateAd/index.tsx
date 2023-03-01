import { createPortal } from "react-dom";
import BaseModal from "../../BaseModal";
import FormCreateAd from "../../FormCreateAd/form";
import RegisterUserModal from "../../RegisterUser";

function ModalCreateAd() {
  return createPortal(
    <BaseModal>
      <FormCreateAd />
      <RegisterUserModal />
    </BaseModal>,
    document.getElementById("root") as HTMLElement
  );
}

export default ModalCreateAd;
