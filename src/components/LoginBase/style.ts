import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IModalBody extends HTMLAttributes<HTMLCollection> {
  padding: string | undefined;
  height: string | undefined
}

const ModalStyled = styled.main`
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.section<IModalBody>`
  width: 343px;
  min-width: 343px;
  margin-top: 22px;
  margin-bottom: 22px;
  height: ${({ height }) => (height ? height : 'auto')};
  padding: ${({ padding }) => (padding ? padding : "18px 24px")};
  background-color: #fdfdfd;
  border-radius: 4px;
  /* position: relative; */
  overflow: scroll;
  
  ::-webkit-scrollbar{
    width: 0;
  }

  .close-modal {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  .close-modal svg {
    width: 24px;
    height: 24px;
  }

  h2{
    font: var(--heading-5-500);
    margin-bottom: 32px;
  }

  h3{
    font: var(--heading-7-500);
    margin-bottom: 55px;
  }

  .title-form{
    font: var(--body-2-500);
  }

  Button{
    font:var(--button-big-text);
  }

  .type-account-title{
    font:var(--body-2-500);
  }
`;

export { ModalStyled, ModalBody };
