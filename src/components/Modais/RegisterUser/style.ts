import styled from "styled-components";
import BaseModal from "../../BaseModal";
import { ModalBody } from "../../BaseModal/style";
import Button from "../../Button";
import { FormBase } from "../LoginModal/style";

const Wrapper = styled.div`
  display: inline-flex;
  background: var(--gray-1);
  height: 48px;
  width: 100%;
  gap: 25px;
  margin-top: 28px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  label{
    font:var(--button-big-text);
  }

  .option {
    background: var(--white-fixed);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px;
    border: 2px solid lightgrey;
    transition: all 0.3s ease;
  }

  input[type="radio"] {
    display: none;
  }

  #option-1:checked:checked ~ .option-1,
  #option-2:checked:checked ~ .option-2 {
    border-color: var(--color-brand-1);
    background: var(--color-brand-1);
  }
  #option-1:checked:checked,
  #option-2:checked:checked {
    background: var(--gray-10);
  }
  #option-1:checked:checked ~,
  #option-2:checked:checked ~ {
    opacity: 1;
    transform: scale(1);
  }
  .wrapper .option span {
    font-size: 20px;
    color: #808080;
  }
  #option-1:checked:checked ~ .option-1 span,
  #option-2:checked:checked ~ .option-2 span {
    color: #fff;
  }
`

const FormBaseRegister = styled(FormBase)`
  margin-bottom: 28px;
`

export { Wrapper, FormBaseRegister };
