import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ModalsContext } from "../Modals";

export interface IUserLogin {
  email: string,
  password: string
}

export interface IAddressRegister {
  cep: string,
  state: string,
  city: string,
  street: string,
  number: string,
  complement: string,
}

export interface IUserRegister extends IAddressRegister {
  name: string,
  email: string,
  cpf: string,
  phone: string,
  birthdate: string,
  description: string,
  typeUser: string,
  password: string,
  confirmPassword: string,
}


interface ISellerProviderProps {
  children: ReactNode
}

interface ISellerContext {
  userLogin: (data: IUserLogin) => void,
  createUser: (data: IUserRegister) => void,
  user: any,
  addCount: () => void,
  resetUser: () => void
}

export const SellerContext = createContext<ISellerContext>({} as ISellerContext);

const SellerProvider = ({ children }: ISellerProviderProps) => {
  const [user, setUser] = useState<any>({})
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  const { handleOpenModalRegisterUserSuccess, handleCloseModalRegisterUser } = useContext(ModalsContext)

  useEffect(() => {

    const loadUser = async () => {
      const token = JSON.parse(localStorage.getItem('@MotorShopTOKEN') || '{}')
      if (token) {

        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`
          const { data } = await api.get('/profile')
          setUser(data)
        }
        catch (error) {
          console.error(error);
          localStorage.removeItem('@MotorShopTOKEN')
          localStorage.removeItem('@MotorShopUSERID')
          localStorage.removeItem('@MotorShopUSERTYPE')
          localStorage.removeItem('@MotorShopUSERNAME')
        }
      }
      setLoading(false)
    }

    loadUser()
  }, [count])

  const addCount = () => {
    setCount(count + 1)
  }

  const resetUser = () => {
    setUser({})
  }

  //fazer login
  const userLogin = async (data: IUserLogin) => {
    const req = await api.post('/login', data)
    if (req.status !== 200)
      console.log('Usuario não encontrado')

    navigate('./home', { replace: true })
    setUser(req.data)
    console.log(req.data)
    localStorage.setItem('@MotorShopTOKEN', JSON.stringify(req.data.token))
    localStorage.setItem('@MotorShopUSERID', JSON.stringify(req.data.id))
    localStorage.setItem('@MotorShopUSERTYPE', JSON.stringify(req.data.typeUser))
    localStorage.setItem('@MotorShopUSERNAME', JSON.stringify(req.data.name))
  }

  //cadastro
  const createUser = async (data: IUserRegister) => {
    try {
      const address = {
        cep: data.cep,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement
      }
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
        address: address
      }

      console.log(user)
      const req = await api.post('/users', user)
      console.log(req.data)
      setUser(req.data)
      setCount(count + 1)
      // toast.success('Usuário criado com sucesso!')
      navigate('/login', { replace: true })
      handleOpenModalRegisterUserSuccess()
      handleCloseModalRegisterUser()
    }
    catch (error) {
      console.error(error);
    }
  }


  return (
    <SellerContext.Provider value={{ userLogin, createUser, user, addCount, resetUser }}>
      {children}
    </SellerContext.Provider>
  )
}

export default SellerProvider;
