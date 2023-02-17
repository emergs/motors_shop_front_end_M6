import { useState } from "react";
import { elementsMenu } from "../../utils";
import { NavigationStyled } from "./style";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <NavigationStyled>
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      ></button>
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
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Header;

