import { Props } from "./interface";
import { Container } from "./style";

function BaseModal({ children }: Props) {
  return <Container>{children}</Container>;
}

export default BaseModal;
