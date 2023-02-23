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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  overflow-x: auto;
  overflow-y: hidden;

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
