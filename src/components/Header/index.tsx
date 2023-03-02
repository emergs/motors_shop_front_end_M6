import { useContext, useState } from "react";
import { elementsMenu } from "../../utils";
import Button from "../Button";
import { NavigationStyled } from "./style";
import imgLogo from "../../assets/logo.svg"
import { FiMenu } from "react-icons/fi"
import { ModalsContext } from "../../contexts/Modals";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const { handleOpenModalRegisterUser, handleOpenModalLogin } = useContext(ModalsContext)

  const navigate = useNavigate()

  const redirectRegister = () => {
    navigate('/login', { replace: true })
    setTimeout(() => {
      handleOpenModalRegisterUser()
    }, 100)
  }

  const redirectLogin = () => {
    navigate('/login', { replace: true })
    setTimeout(() => {
      handleOpenModalLogin()
    }, 100)
  }


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
            <button className="login" onClick={() => redirectLogin()}>Fazer Login</button>
          </li>
          <li>
            <button className="register" onClick={() => redirectRegister()}>Cadastrar</button>
          </li>
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Header;

