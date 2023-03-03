import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ModalsContext } from "../Modals";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAddressRegister {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IUserRegister extends IAddressRegister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  typeUser: string;
  password: string;
  confirmPassword: string;
}

interface ISellerProviderProps {
  children: ReactNode;
}

interface ISellerContext {
  userLogin: (data: IUserLogin) => void;
  createUser: (data: IUserRegister) => void;
  user: any;
  setUser: any;
}

export const SellerContext = createContext<ISellerContext>(
  {} as ISellerContext
);

const SellerProvider = ({ children }: ISellerProviderProps) => {
  const [user, setUser] = useState<any>({});
  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();

  const { handleOpenModalRegisterUserSuccess, handleCloseModalRegisterUser } =
    useContext(ModalsContext);

    //fazer login
    const userLogin = async (data: IUserLogin) => {
        api.post("/login", data).then((res)=>{
            const { token, id,typeUser} = res.data
            console.log(res.data)

            window.localStorage.clear()
            window.localStorage.setItem('@MotorShopTOKEN', token)
            window.localStorage.setItem('@MotorShopUSERID', id)
            window.localStorage.setItem('@MotorShopUSERTYPE', typeUser)
            navigate("../home", { replace: true });
            
        })
    };

  //cadastro
  const createUser = async (data: IUserRegister) => {
    try {
      const address = {
        cep: data.cep,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement,
      };
      const user = {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        phone: data.phone,
        birthdate: data.birthdate,
        description: data.description,
        typeUser: data.typeUser,
        password: data.password,
        confirmPassword: data.confirmPassword,
        address: address,
      };

      console.log(user);
      const req = await api.post("/users", user);
      console.log(req.data);
      setUser(req.data);
      setCount(count + 1);
      // toast.success('Usuário criado com sucesso!')
      navigate("/login", { replace: true });
      handleOpenModalRegisterUserSuccess();
      handleCloseModalRegisterUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SellerContext.Provider value={{ userLogin, createUser, user, setUser }}>
      {children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
