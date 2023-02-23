import styled from "styled-components";

const HomePage = styled.main`
  width: 100%;
  height: 100%;
`

const HomeContent = styled.section`
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:3.25rem;
    height: 38.94rem;
    padding-top: 5.469rem;
    background-color: var(--color-brand-2);
  }

  .main h1{
    font: var(--heading-3-600);
    color: var(--grey-10);
    text-align: center;
  }

  .main span{
    font: var(--body-1-400);
    color: var(--grey-9);
    padding: 0 1.094rem;
    text-align: center;
  }

  .main-buttons-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .main-buttons-group button{
    width: 93.6%;
    height: 3rem;
    font:var(--button-big-text);
    color: var(--grey-10);
    border: 1.5px solid var(--grey-10);
    background-color: var(--color-brand-2);
    cursor: pointer;
  }

  @media(min-width:768px) {
    .main{
      padding: 0px 425px;
      display: flex;
      justify-content: center;
    }
    .main h1{
      font: var(--heading-1-700);
      min-width: 381px;
    }
    .main span{
      min-width: 381px;
    }
    .main-buttons-group{
      display: flex;
      flex-direction: row;
      width: 381px;
    }
  }

`
export { HomePage, HomeContent }