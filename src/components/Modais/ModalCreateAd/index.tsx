import { createPortal } from "react-dom";
import BaseModal from "../../BaseModal";
import FormCreateAd from "../../FormCreateAd/form";

function ModalCreateAd() {
  return createPortal(
    <BaseModal>
      <FormCreateAd />
    </BaseModal>,
    document.getElementById("root") as HTMLElement
  );
}

export default ModalCreateAd;
