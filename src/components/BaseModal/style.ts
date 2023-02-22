import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  z-index: 1;
  padding: 80px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);

  @keyframes scale-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
