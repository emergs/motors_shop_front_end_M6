import styled from "styled-components";
import { motion } from "framer-motion";

import { ICardAtributes } from "./interfaces";

export const CardModel = styled.div<ICardAtributes>`
  position: ${({ position }) => position};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};

  margin: 30px;

  img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
    background-color: var(--grey-7);
  }

  .details-container {
    position: ${({ detailsContainerPosition }) => detailsContainerPosition};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: ${({ detailsContainerJustifyContent }) =>
      detailsContainerJustifyContent};
    width: ${({ detailsContainerWidth }) => detailsContainerWidth};
    height: ${({ detailsContainerHeight }) => detailsContainerHeight};
    background-color: ${({ detailsContainerBackground }) =>
      detailsContainerBackground};
    background: ${({ detailsContainerBackground }) =>
      detailsContainerBackground};

    h3 {
      font: var(--heading-7-600);
      color: ${({ titleColor }) => titleColor};
      margin-left: 10px;
    }
    p {
      font: var(--body-2-400);
      color: ${({ infoColor }) => (infoColor ? infoColor : "var(--grey-2)")};
      margin-left: 10px;
    }
    .button-container {
      display: inline-flex;
      flex-direction: row;
      width: 100%;
      gap: 10px;

      padding: 10px;

      background-color: ${({ buttonContainerBackground }) =>
        buttonContainerBackground};
        a{
            border: 1px solid var(--grey-0) ;
        }
    }
    .time {
      display: ${({ timeDisplay: timeDisplay }) =>
        timeDisplay ? timeDisplay : "none"};
      margin-top: 10px;
      margin-left: 10px;
    }
    span {
      display: inline-flex;
      align-items: center;

      font: var(--heading-7-500);

      color: var(--color-brand-1);
      background-color: var(--color-brand-4);
      border-radius: 5px;
      padding: 5px;
      margin-right: 10px;
    }
    span:last-child {
      position: absolute;
      color: ${({ priceColor }) => (priceColor ? priceColor : "var(--grey-0)")};
      background-color: transparent;
      right: 0;
    }
  }
`;
