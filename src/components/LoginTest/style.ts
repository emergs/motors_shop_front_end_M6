import styled from "styled-components";

const FormBase = styled.form`
  display: flex;
  flex-direction: column;

  label{
    margin-top: 32px;
    height: 73px;
    font: var(--input-label);
  }

  Input{
    height: 48px;
    width: 314px;
  }

  .form-login-recovery-password{
    margin-top: 9px;
    text-align: end;
    text-decoration: none;
    font: var(--body-2-500);
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
  
  .form-login-buttons-group Button{
    font: var(--button-big-text);
  }

  .form-base-duo-column{
    display: flex;
    justify-content: space-between;
  }

  .form-base-duo-column Input{
    width: 150px;
  }

`

export { FormBase }