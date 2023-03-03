import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Modals from "../../components/Modais"
import LoginModal from "../../components/Modais/LoginModal"
import { Content } from "./style"

const Login2 = () => {
  return (
    <>
      <Header />
      <Content>
        <LoginModal/>
      </Content>
      <Footer />
    </>
  )
}

export default Login2