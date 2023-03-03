import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Modals from "../../components/Modais"
import { Content } from "./style"

const Login = () => {
  return (
    <>
      <Header />
      <Content>
        <Modals />
      </Content>
      <Footer />
    </>
  )
}

export default Login