import { createContext, ReactNode } from "react";

interface ISellerContext {

}

interface ISellerProviderProps {
  children: ReactNode
}


export const SellerContext = createContext<ISellerContext>({} as ISellerContext);

const SellerProvider = ({ children }: ISellerProviderProps) => {

  return (
    <SellerContext.Provider value={{}}>
      {children}
    </SellerContext.Provider>
  )
}

export default SellerProvider;