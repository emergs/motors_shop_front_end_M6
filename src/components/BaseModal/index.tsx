import { ReactNode, ReactPortal } from "react";
import { Container } from "./style";

function BaseModal({ children }: any) {
  return <Container>{children}</Container>;
}

export default BaseModal;
