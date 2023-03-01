import { useState } from "react";
import { elementsMenu } from "../../utils";
import Button from "../Button";
import { NavigationStyled } from "./style";
import imgLogo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate()

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    const pathname = window.location.pathname;
    if(pathname != "/home"){
      navigate('/home')
    }
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // atraso de 500 milissegundos (meio segundo)
  };
  
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
          {elementsMenu.map((e, index) => {
            return (
              <li key={index}>
                {/* <a href={e.anchor}>{e.name}</a> */}
                <a href={e.anchor} onClick={(event) => handleLinkClick(event, e.anchor)}>
                  {e.name}
                </a>
              </li>
            );
          })}
          <hr />
          <span></span>
          <li>
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
