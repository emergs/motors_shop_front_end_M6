import styled from "styled-components";

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
