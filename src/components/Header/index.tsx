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
      <a href="/home" className="brand-name">
        <img src={imgLogo} alt="logo" />
      </a>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <FiMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {elementsMenu.map((e) => {
            return (
              <li>
                <a href={e.anchor}>{e.name}</a>
              </li>
            );
          })}
          <hr />
          <span>
          </span>
          <li >
            <button className="login">Fazer Login</button>
          </li>
          <li>
            {/* <a href="/" className="register">Cadastrar</a> */}
            <button className="register">Cadastrar</button>
          </li>
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Header;

