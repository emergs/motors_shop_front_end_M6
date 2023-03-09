import styled from "styled-components";
import { IDropDownProps } from ".";

const NavigationStyled = styled.div`
  padding: 0px 16px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #DEE2E6;
  background-color: var(--white-fixed);

  .hamburger {
    display: block;
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0px;
    background-color: inherit;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }

  .hamburger:hover {
    /* background-color: ; */
  }

  .hamburger svg{
    width: 25px;
    height: 25px;
  }

  .navigation-menu ul {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border:none;
  }

  .navigation-menu ul{
    display: none;
  }

  .navigation-menu li {
    list-style-type: none;
    text-align: start;
    padding: 0 16px;
  }
  .navigation-menu li a {
    font: var(--body-1-600);
    color: var(--grey-2);
    padding: 1.5rem 0;
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .navigation-menu li a.login{
    color: #2642af;
  }

  .navigation-menu li:hover {
    background-color: #eee;
  }
  
  .navigation-menu.expanded ul {
    display: block;
    padding-bottom: 32px;
  }
  .register{
    width: 100%;
    height: 48px;
    font: var(--button-big-text);
    border: 1.5px solid var(--grey-4);
    border-radius: 5px;
    /* margin-bottom: 32px; */
  }

  .login{
    font:var(--body-1-600);
    padding: 32px 0;
    border: none;
  }

  .login, .register{
    background-color: inherit;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 0rem 3.75rem;
    color: black;
  
    //logo
    .brand-name {
      margin-left: 0;
    }

    .navigation-menu {
      margin-left: auto;
      height: 100%;
    }

    span{
      width: 1px;
      height: 100%;
      margin: 0 1rem;
      border: 1px solid #DEE2E6;
    }

    .navigation-menu ul,.navigation-menu.expanded ul {
      position: relative;
      top:0;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      min-width: 300px;
      
    }

    .navigation-menu.expanded ul{
      padding-bottom: 0px;
    }

    .navigation-menu li {
      list-style-type: none;
      margin: 0rem;
    }
    .navigation-menu li a {
      font:var(--body-1-600);
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 0rem;
    }

    .navigation-menu li a:last-child {
      padding: 0.5rem 2rem;
    }

    .hamburger {
      display: none;
    }

    .register {
      width: 133px;
    }

    .login{
      height: 100%;
      padding: 10px 0;
    }

  }


`

const Menu = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const NameUser = styled.button`
  background-color: inherit;
  color: black;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Dropdown = styled.div<IDropDownProps>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  padding-left: 0px;
  width: 100%;
  @media (min-width: 768px) {
    display: ${(props) => (props.menuIsOpen ? "block" : "none")};
    position: absolute;
    z-index: 1;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
`;

const DropdownItem = styled.a`
  padding: 12px 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 12px;
  &:hover {
    background-color: #ddd;
    @media (min-width: 768px) {
      color: black;
      padding: 12px 16px;
    }
  }
`;

export { NavigationStyled, Menu, NameUser, Dropdown, DropdownItem };
