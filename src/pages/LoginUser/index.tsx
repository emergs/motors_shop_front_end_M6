import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LoginTest from "../../components/LoginTest"
import Modals from "../../components/Modais"
import { Content, RegisterPage } from "../Register/style"


const LoginUser = () => {
  return (
    <>
      <Header />
      <RegisterPage>
        <Content>
          <LoginTest />
        </Content>
      </RegisterPage>
      <Footer />
    </>
  )
}

export default LoginUser