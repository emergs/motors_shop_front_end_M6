import { useContext, useState } from "react";
import { elementsMenu } from "../../utils";
import Button from "../Button";
import { NavigationStyled } from "./style";
import imgLogo from "../../assets/logo.svg"
import { FiMenu } from "react-icons/fi"
import { ModalsContext } from "../../contexts/Modals";
import { useNavigate } from "react-router-dom";

export interface IDropDownProps extends HTMLAttributes<HTMLDivElement> {
  menuIsOpen: boolean;
}

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()
  
  //pegar o user do context de user
  
  const { handleOpenModalRegisterUser, handleOpenModalLogin } = useContext(ModalsContext)

  //colocar no utils
  const seller = ["Editar perfil", "Editar endereço", "Meus anúncios", "Sair"];
  const buyer = ["Editar perfil", "Editar endereço", "Sair"];
  
  const handleClick = () => {
    setMenu(!menu);
  };
  
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


  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    event.preventDefault();
    const pathname = window.location.pathname;
    if (pathname != "/home") {
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
          <span>
          </span>
           {!user ? (
            <>
              <li>
                <button className="login" onClick={() => redirectLogin()}>Fazer Login</button>
              </li>
              <li>
                <button className="register" onClick={() => redirectRegister()}>Cadastrar</button>
              </li>
            </>
          ) : (
            <Menu>
              <NameUser onClick={handleClick}>{user.name}</NameUser>
              <Dropdown menuIsOpen={menu}>
                {user.typeUser === "seller"
                  ? seller?.map((elem) => {
                      return <DropdownItem href="#">{elem}</DropdownItem>;
                    })
                  : buyer?.map((elem) => {
                      return <DropdownItem href="#">{elem}</DropdownItem>;
                    })}
              </Dropdown>
            </Menu>
          )}
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Header;
