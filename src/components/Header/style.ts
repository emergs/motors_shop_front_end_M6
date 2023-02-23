import styled from "styled-components";

const NavigationStyled = styled.div`
  padding: 0px 16px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #DEE2E6;

  Button {
    display: block;
    border: 0;
    height: 40px;
    width: 40px;
    padding: 13px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }

  Button:hover {
    /* background-color: ; */
  }

  Button svg{
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
  }

  .navigation-menu ul{
    display: none;
  }

  .navigation-menu li {
    list-style-type: none;
    text-align: center;
  }
  .navigation-menu li a {
    color: black;
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
    .navigation-menu li {
      list-style-type: none;
      margin: 0rem;
    }
    .navigation-menu li a {
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 0rem;
    }

    .navigation-menu li a:last-child {
      padding: 0.5rem 2rem;
    }

    Button {
      display: none;
    }

    .register{
      border: 1px solid #DEE2E6;
      border-radius: 5px;
    }
  }


`

export { NavigationStyled };
