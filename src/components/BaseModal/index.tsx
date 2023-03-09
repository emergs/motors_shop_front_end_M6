import { ModalBody, ModalStyled } from "./style";
import { RiCloseFill } from "react-icons/ri";
import { BaseModalProps } from "./interface";
import { useContext } from "react";
import { ModalsContext } from "../../contexts/Modals";

const BaseModal = ({ children, padding, height }: BaseModalProps) => {

  return (
    <ModalStyled>
      <ModalBody padding={padding} height={height}>
        {children}
      </ModalBody>
    </ModalStyled>
  );
};

export default BaseModal;