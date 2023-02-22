import { createPortal } from "react-dom";
import BaseModal from "../../BaseModal";
import FormEditAd from "../../FormEditAd/form";

function ModalEditAd() {
  return createPortal(
    <BaseModal>
      <FormEditAd />
    </BaseModal>,
    document.getElementById("root") as HTMLElement
  );
}

export default ModalEditAd;
