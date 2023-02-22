import styled from "styled-components";

export const StyledFormEditAd = styled.form`
  min-width: 346px;
  width: 520px;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: "Inter";
  border-radius: 8px;
  background-color: white;
  gap: 1.1rem;
  animation: scale-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  textarea {
    font-family: "Inter";
  }

  .form-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    h4 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }

    svg {
      cursor: pointer;
    }
  }

  .ad-type {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;

      input {
        min-width: 152px;
        width: 228px;
        max-width: 228px;
        height: 48px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        border-radius: 4px;
        border: 1.5px solid transparent;
        cursor: pointer;
      }
    }
  }

  .form-data-number {
    display: flex;
    justify-content: space-between;
  }

  .button-color {
    color: var(--white-fixed);
    background-color: #4529e6;
    border: 1.5px solid #4529e6;
  }

  .add-field {
    width: 315px;
    height: 38px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-brand-1);
    background-color: var(--color-brand-4);
    border: 1.5px solid var(--color-brand-4);
    border-radius: 4px;
    cursor: pointer;
  }

  .div-submit {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    gap: 10px;

    .button-cancel {
      width: 126px;
      height: 48px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
      background: #dee2e6;
      border: 1.5px solid #dee2e6;
      border-radius: 4px;
      cursor: pointer;
    }

    .button-submit {
      width: 193px;
      height: 48px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #edeafd;
      background-color: #b0a6f0;
      border: 1.5px solid #b0a6f0;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;

      :hover {
        background-color: #4529e6;
        border: 1.5px solid #4529e6;
      }
    }
  }

  @media (max-width: 550px) {
    margin: 1rem;
    .form-data-number {
      flex-wrap: wrap;
      gap: 1rem;

      label {
        min-width: 45%;
      }

      .input-data-price {
        min-width: 100%;
      }
    }
  }
`;
