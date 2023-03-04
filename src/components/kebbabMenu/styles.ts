import { FaEllipsisV } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
position: relative;
`;

export const KebabIcon = styled(FaEllipsisV)`
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 8px;
  z-index: 1;
`;

export const MenuItem = styled.p`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
