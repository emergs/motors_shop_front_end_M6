import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { IUserLogin, SellerContext } from "../../../contexts/Seller";
import { ModalsContext } from "../../../contexts/Modals";
import BaseModal from "../../BaseModal";
import Button from "../../Button";
import Input from "../../Input/input";
import { FormBase } from "./style";
import { FormValues } from "../../FormCreateAd/interface";

const LoginModal = () => {

  const { handleCloseModalLogin } = useContext(ModalsContext)

  const { userLogin } = useContext(SellerContext)

  const { control, handleSubmit } = useForm<IUserLogin>()

  return (
    <BaseModal padding={'44px 28px'}>
      <button className="close-modal" onClick={() => handleCloseModalLogin()}>
        <RiCloseFill />
      </button>
      <h2>Login</h2>
      <FormBase onSubmit={handleSubmit(userLogin)}>

        <Input label="Usuário " name="user" type="text" placeholder="Digitar Usuário" control={control} />
        <Input label="Senha" name="password" type="password" placeholder="Digitar Senha" control={control} />

        <a className="form-login-recovery-password" href="#">Esqueci minha senha</a>

        <div className="form-login-buttons-group">

          <Button
            backgroundColor="var(--color-brand-1)"
            height="48px"
            color="var(--white-fixed)"
          >Entrar</Button>
          <span>Ainda não possui cadastro</span>
          <Button
            border="1.5px solid var(--grey-4)"
            hoverBorder="1.5px solid var(--grey-4)"
          >Cadastrar</Button>
        </div>
      </FormBase>

    </BaseModal>
  );
};

export default LoginModal;
