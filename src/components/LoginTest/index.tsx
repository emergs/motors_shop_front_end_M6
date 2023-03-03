import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ModalsContext } from "../../contexts/Modals";
import { IUserLogin, SellerContext } from "../../contexts/Seller";
import Button from "../Button";
import Input from "../Input/input";
import BaseLogin from "../LoginBase";
import { FormBase } from "./style";

const LoginTest = () => {
    const { handleCloseModalLogin } = useContext(ModalsContext);

    const { userLogin } = useContext(SellerContext);

    const { control, handleSubmit } = useForm<IUserLogin>();

    const navigate = useNavigate();
    function onClickSend() {
        navigate("/home", { replace: true });
    }

    return (
        <BaseLogin padding={"44px 28px"}>
            <h2>Login</h2>
            <FormBase onSubmit={handleSubmit(userLogin)}>
                <Input
                    label="Usuário "
                    name="email"
                    type="text"
                    placeholder="Digitar Usuário"
                    control={control}
                />
                <Input
                    label="Senha"
                    name="password"
                    type="password"
                    placeholder="Digitar Senha"
                    control={control}
                />

                <a className="form-login-recovery-password" href="#">
                    Esqueci minha senha
                </a>

                <div className="form-login-buttons-group">
                    <Button
                        backgroundColor="var(--color-brand-1)"
                        height="48px"
                        color="var(--white-fixed)"
                    >
                        Entrar
                    </Button>
                    <span>Ainda não possui cadastro</span>
                    <Button
                        type="button"
                        onClick={onClickSend}
                        border="1.5px solid var(--grey-4)"
                        hoverBorder="1.5px solid var(--grey-4)"
                    >
                        Cadastrar
                    </Button>
                </div>
            </FormBase>
        </BaseLogin>
    );
};

export default LoginTest;
