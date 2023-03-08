import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pt-br.js';
import {
  ICommentProps,
  IVehicleProps,
} from "../../components/ProductsPage/interfaces";
import api from "../../services/api";
import { ModalsContext } from "../Modals";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAddressRegister {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface IUserEdition {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  typeUser?: string;
  password?: string;
  confirmPassword?: string;
  address?: IAddressRegister;
  profileImage?: string;
}

export interface IUserRegister extends IAddressRegister {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  typeUser?: string;
  password?: string;
  confirmPassword?: string;
}

interface ISellerProviderProps {
  children: ReactNode;
}

interface ISellerContext {
  userLogin: (data: IUserLogin) => void,
  createUser: (data: IUserRegister) => void,
  editProfile: (data: IUserRegister) => void,
  editAddress: (data: IAddressRegister) => void,
  user: IUserEdition,
  addCount: () => void,
  resetUser: () => void
  setUser: any;
  error: any;
  loading: any
  setLoading: any
  vehicle: any
  setVehicle: any
  nameSplited: any
  setNameSplited: any
  comments: any
  setComments: any
  userLoggedId: any
  setUserLoggedId: any
  postTime: any
  setPostTime: any
}

export const SellerContext = createContext<ISellerContext>(
  {} as ISellerContext
);

const SellerProvider = ({ children }: ISellerProviderProps) => {
  const [user, setUser] = useState<any>({});
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>({})
  const [vehicle, setVehicle] = useState<IVehicleProps>();
  const [nameSplited, setNameSplited] = useState<string>("");
  const [comments, setComments] = useState<ICommentProps[]>([]);
  const [userLoggedId, setUserLoggedId] = useState<String>("");
  const [postTime, setPostTime] = useState<String>('')

  const navigate = useNavigate();

  const {
    handleOpenModalRegisterUserSuccess,
    handleModalAlerts,
    handleCloseModalEditProfile,
    handleCloseModalEditAddress
  } = useContext(ModalsContext);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@MotorShopTOKEN") || "{}";
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/users/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@MotorShopTOKEN");
          localStorage.removeItem("@MotorShopUSERID");
          localStorage.removeItem("@MotorShopUSERTYPE");
          localStorage.removeItem("@MotorShopUSERNAME");
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [count]);

  const addCount = () => {
    setCount(count + 1);
  };

  const resetUser = () => {
    setUser({});
  };

  //fazer login
  const userLogin = async (data: IUserLogin) => {
    console.log(data)
    api.post("/login", data).then((res) => {
      const { token, id, typeUser } = res.data;

      window.localStorage.clear()
      window.localStorage.setItem('@MotorShopTOKEN', token)
      window.localStorage.setItem('@MotorShopUSERID', id)
      window.localStorage.setItem('@MotorShopUSERTYPE', typeUser)

      typeUser == "seller" ? navigate("/admview", { replace: true }) : navigate("/home", { replace: true })

      addCount()
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

      const req = await api.post("/users", user);
      setCount(count + 1);
      handleOpenModalRegisterUserSuccess();
    }
    catch (error: any) {
      setError(error.response?.data?.message)
      console.log(error)
      addCount()
      handleModalAlerts()
    }
  };

  const editProfile = async (data: IUserRegister) => {
    try {
      const req = await api.patch("/users/profile", data);
      handleCloseModalEditProfile()
      addCount()
    }
    catch (error) {
      console.log(error)
    }
  }

  const editAddress = async (data: IAddressRegister) => {
    try {
      const address = { ...data }
      const addressData = { address }
      console.log(addressData);
      const req = await api.patch("/users/profile", addressData);
      console.log(req);
      handleCloseModalEditAddress()
      addCount()
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <SellerContext.Provider
      value={{
        error,
        editProfile,
        editAddress,
        userLogin,
        createUser,
        user,
        addCount,
        resetUser,
        setUser,
        loading,
        setLoading,
        vehicle,
        setVehicle,
        nameSplited,
        setNameSplited,
        comments,
        setComments,
        userLoggedId,
        setUserLoggedId,
        postTime,
        setPostTime
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
