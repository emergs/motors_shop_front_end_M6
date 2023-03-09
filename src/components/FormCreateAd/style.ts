import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--white-fixed);
  width: 100%;
  height: auto;
  font-family: "Inter";
  padding: 20px;

  border-radius: 10px;

  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: left;

    width: 100%;
    height: auto;
    border: none;

    legend {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    input {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 100%;
      height: 35px;

      padding: 0;
      outline: none;
      border-radius: 5px;
      border: 1px solid var(--grey-6);

      :focus {
        border: 1px solid var(--color-brand-1);
      }
    }
    span {
      display: inline-flex;
      flex-direction: row;
      color: var(--grey-0);
      width: 90%;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 5px;
      margin-top: 5px;
    }
    .common-field {
      align-items: left;
      justify-content: left;
      width: 90%;
    }
    .choice-field {
      align-items: center;
      justify-content: center;
      width: 42%;
    }
    .number-field {
      align-items: flex-start;
      justify-content: center;

      width: 26%;

      margin: 5px;
    }

    textarea {
      display: flex;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      width: 100%;
      height: 70px;
      border: 1px solid var(--grey-6);
      outline: none;
      overflow-y: auto;
      overflow-x: hidden;

      :focus {
        border: 1px solid var(--color-brand-1);
      }

      ::-webkit-scrollbar {
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: var(--color-brand-4);
      }
    }
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 42%;
      margin: 5px;
    }

    input[type="file"] {
      &::-webkit-file-upload-button {
        height: 100%;
        width: 46%;

        border: 1px solid var(--color-brand-1);
        border-radius: 5px;

        color: var(--color-brand-1);
        background-color: var(--color-brand-4);
        outline: none;
        cursor: pointer;
        :focus {
          background-color: var(--color-brand-3);
          color: var(--white-fixed);
          border: 1px solid var(--color-brand-3);
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 200px;
  border: 1px solid var(--grey-6);

  button {
    width: 20px;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;

    overflow-y: hidden;
    overflow-x: hidden;

    img {
      width: 90%;
    }
  }
  span {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
