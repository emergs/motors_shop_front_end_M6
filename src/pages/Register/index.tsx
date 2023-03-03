import { useContext } from "react"
import { useForm } from "react-hook-form"
import { RiCloseFill } from "react-icons/ri"
import BaseModal from "../../components/BaseModal"
import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input/input"
import Textarea from "../../components/Textarea/textarea"
import { ModalsContext } from "../../contexts/Modals"
import { IUserRegister, SellerContext } from "../../contexts/Seller"
import { Content, FormBaseRegister, RegisterPage, Wrapper } from "./style"

const Register = () => {

  const { handleCloseModalRegisterUser, handleOpenModalRegisterUserSuccess } = useContext(ModalsContext)
  const { createUser } = useContext(SellerContext)

  const { control, handleSubmit, register } = useForm<IUserRegister>()


  return (
    <>
      <Header />
      <RegisterPage>
        <Content>
          <form onSubmit={handleSubmit(createUser)}>

            <h2>Cadastro</h2>
            <span className="title-form">Informações pessoais</span>
            <FormBaseRegister>
              <Input label="Nome " name="name" type="text" placeholder="Digite seu Nome" control={control} />
              <Input label="Email " name="email" type="email" placeholder="seuemail@mail.com" control={control} />
              <Input label="CPF " name="cpf" type="text" placeholder="000.000.000-00" control={control} />
              <Input label="Telefone " name="phone" type="text" placeholder="(00)00000-0000" control={control} />
              <Input label="Data de nascimento " name="birthdate" type="date" placeholder="00/00/0000" control={control} />
              <Textarea label="Descrição " name="description" placeholder="Digite algo que julgar útil" control={control} />
            </FormBaseRegister>
            <span className="title-form">Informações de endereço</span>
            <FormBaseRegister>
              <Input label="CEP " name="cep" type="text" placeholder="00.000-000" control={control} />
              <div className="form-base-duo-column">
                <Input label="Estado " name="state" type="text" placeholder="Paraná" control={control} />
                <Input label="Cidade " name="city" type="text" placeholder="Curitiba" control={control} />
              </div>
              <Input label="Rua " name="street" type="text" placeholder="Rua A" control={control} />
              <div className="form-base-duo-column">
                <Input label="Número " name="number" type="text" placeholder="1070" control={control} />
                <Input label="Complemento " name="complement" type="text" placeholder="Apto 1" control={control} />
              </div>
            </FormBaseRegister>
            <span className="type-account-title">Tipo de conta</span>
            <Wrapper>
              <input type="radio" id="option-1" value="buyer" {...register("typeUser")} defaultChecked />
              <input type="radio" id="option-2" value="seller" {...register("typeUser")} />
              <label htmlFor="option-1" className="option option-1">
                <span>Comprador</span>
              </label>

              <label htmlFor="option-2" className="option option-2">
                <span>Anunciante</span>
              </label>
            </Wrapper>
            <FormBaseRegister>
              <Input label="Senha " name="password" type="password" placeholder="Digite sua senha" control={control} />
              <Input label="Confirmar senha " name="confirm-password" type="password" placeholder="Digite sua senha" control={control} />
            </FormBaseRegister>
            <Button
              width="100%"
              height="48px"
              backgroundColor="var(--color-brand-1)"
              color="var(--white-fixed)"
            // onClick={() => successRegister()}
            >Finalizar cadastro
            </Button>
          </form>
        </Content >
      </RegisterPage>
    </>
  )
}

export default Register