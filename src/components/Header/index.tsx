import { useState } from "react";
import { elementsMenu } from "../../utils";
import Button from "../Button";
import { NavigationStyled } from "./style";
import imgLogo from "../../assets/logo.svg"
import { FiMenu } from "react-icons/fi"

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <NavigationStyled>
      <a href="/" className="brand-name">
        <img src={imgLogo} alt="logo" />
      </a>
      <Button
        backgroundColor="inherit"
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <FiMenu />
      </Button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {elementsMenu.map((e) => {
            return (
              <li>
                <a href="/home">{e.name}</a>
              </li>
            );
          })}
          <span>
          </span>
          <li >
            <a href="/" className="login">Fazer Login</a>
          </li>
          <li>
            <a href="/" className="register">Cadastrar</a>
          </li>
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Header;

