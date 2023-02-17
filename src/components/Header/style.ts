import styled from "styled-components";

const NavigationStyled = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);

  .brand-name {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .navigation-menu {
    margin-left: auto;
  }
  .navigation-menu ul {
    display: flex;
    padding: 0;
  }
  .navigation-menu li {
    list-style-type: none;
    margin: 0 1rem;
  }
  .navigation-menu li a {
    text-decoration: none;
    display: block;
    width: 100%;
  }
  .hamburger {
    // removes default border on button element
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    // positions the icon to the right and center aligns it vertically
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  }
  .hamburger:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: block;
    }
    .navigation-menu ul,
    button {
      display: none;
    }
    .navigation-menu.expanded ul,
    button {
      display: block;
    }

    .navigation-menu ul {
      // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
      position: absolute;
      top: 60px;
      left: 0;
      // stacks the li tags vertically
      flex-direction: column;
      // makes menu span full height and width
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }
    /*
    .navigation-menu li {
      // centers link text and strips off margin
      text-align: center;
      margin: 0;
    }
    .navigation-menu li a {
      color: black;
      // increases the surface area of the anchor tag to span the full width of the menu
      width: 100%;
      padding: 1.5rem 0;
    }
    .navigation-menu li:hover {
      background-color: #eee;
    } */
  }
`;

export { NavigationStyled };
