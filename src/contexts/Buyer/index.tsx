import { createContext, ReactNode } from "react";

interface IBuyerContext {

}

interface IBuyerProviderProps {
  children: ReactNode
}


export const SellerContext = createContext<IBuyerContext>({} as IBuyerContext);

const BuyerProvider = ({ children }: IBuyerProviderProps) => {

  return (
    <SellerContext.Provider value={{}}>
      {children}
    </SellerContext.Provider>
  )
}

export default BuyerProvider;