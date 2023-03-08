import styled from "styled-components";
import { FormBase } from "../../components/Modais/LoginModal/style";


const RegisterPage = styled.main`
display: flex;
justify-content: center;
background-color: var(--grey-8);

.form-base-duo-column{
    display: flex;
    justify-content: space-between;
  }

  .form-base-duo-column Input{
    width: 100%;
  }
  .form-login-buttons-group{
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 21px;
    font: var(--body-2-400);
    color: var(--grey-2);
    text-align: center;
  }
  Input{
    height: 48px;
    width: 100%;
  }
`

const Content = styled.div`
margin: 22px 16px;
padding: 22px 28px;
width:343px;
background-color: var(--grey-10);
border-radius: 4px;

h2{
  font:var(--heading-5-500);
  margin-bottom: 32px;
}

.title-form{
  font:var(--body-2-500);
}

@media(min-width: 768px){
  width: 411px;
}
`

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

export { Wrapper, RegisterPage, FormBaseRegister, Content };
