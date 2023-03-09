import styled from "styled-components";

const ModalSuccess = styled.div`
  display: flex;
  flex-direction: column;

  .modal-success{
    font: var(--heading-7-500);
    margin-bottom: 58px;
  }

  .modal-success-title{
    font: var(--heading-7-500);
  }

  div{
    display: flex;
    flex-direction: column;
    gap:18px;
  }

  .modal-success-message{
    font: var(--body-1-400);
    color: var(--grey-2);
    line-height: 28px;
  }

  Button{
    font: var(--button-medium-text);
    margin-bottom: 42px;
  }
`

export { ModalSuccess }