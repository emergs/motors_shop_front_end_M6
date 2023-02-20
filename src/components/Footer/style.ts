import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: var(--grey-0);
  color:var(--white-fixed);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:3.75rem;
  padding: 2.813rem 0;

  img{
    width: 9.5rem;
    height: 1.65rem;
  }

  a{
    width: 3.125rem;
    height: 3.125rem;
    background-color: var(--grey-1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  a svg{
    color: var(--white-fixed);
  }

  @media(min-width: 768px) {
    height: 8.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3.688rem;
  }
`

export { FooterStyled }