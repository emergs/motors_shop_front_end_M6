import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LoginTest from "../../components/LoginTest"
import Modals from "../../components/Modais"

import { Content } from "./style"

const LoginUser = () => {
  return (
    <>
      <Header />
      <Content>
        <LoginTest/>
      </Content>
      <Footer />
    </>
  )
}

export default LoginUser