import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: auto;

  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--color-brand-4);
  }
  h2 {
    font: var(--heading-4-600);
    margin-left: 10px;
  }

  .profile-cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-brand-1);
    width: 100%;
    height: 30vh;
    margin-bottom: 30vh;
    position: relative;
  }
  .profile-card {
    position: absolute;
    top: 50%;
    width: 80%;

    background-color: var(--white-fixed);
    z-index: 99999;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100px;
      height: 100px;
      margin: 10px;

      background-color: var(--color-brand-1);
      border-radius: 50%;
    }

    span {
      color: var(--white-fixed);
      font: var(--heading-1-700);
      width: 100%;
      overflow: hidden;
    }
    h2 {
      font: var(--heading-4-600);
    }

    p {
      font: var(--body-2-400);
      margin: 10px;
      color: var(--grey-2);
    }
    button {
      margin: 10px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: auto;
  height: auto;

  overflow-x: auto;
  overflow-y: hidden;

  margin-bottom: 100px;
  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--color-brand-4);
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  min-width: 300px;
  min-height: 400px;
  margin: 10px;

  img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    background-color: var(--grey-7);
  }

  .details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 60%;

    h3 {
      font: var(--heading-7-600);
    }
    p {
      font: var(--body-2-400);
      color: var(--grey-2);
    }
    .button-container {
      display: inline-flex;
      flex-direction: row;
      width: 100%;
      gap: 10px;
    }
    span {
      font: var(--heading-7-500);

      color: var(--color-brand-1);
      background-color: var(--color-brand-4);
      border-radius: 5px;
      padding: 5px;
      margin-right: 10px;
    }
    span:last-child {
      position: absolute;
      color: var(--grey-0);
      background-color: transparent;
      right: 0;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;

  top: 0;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #0000004a;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 95vh;
  background-color: var(--white-fixed);
  border-radius: 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  span {
    width: 90%;
  }
`;
