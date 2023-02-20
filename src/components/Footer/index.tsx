import Button from "../Button"
import { FooterStyled } from "./style"
import imgLogoClear from "../../assets/logo_clear.svg"
import { RiArrowUpSLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

const Footer = () => {

  const navigate = useNavigate()

  return (
    <FooterStyled>
      <img
        src={imgLogoClear}
        alt="logo"
        onClick={() => navigate('../home', { replace: true })}
      />
      <span>&copy; 2022 - Todos os direitos reservados.</span>
      <a href="#"><RiArrowUpSLine /></a>
    </FooterStyled>
  )
}

export default Footer