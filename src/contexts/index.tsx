import { ReactNode } from 'react';
import BuyerProvider from './Buyer';
import SellerProvider from './Seller';

interface IProvaiders {
  children: ReactNode;
}

const Providers = ({ children }: IProvaiders) => {
  return (
    <SellerProvider>
      <BuyerProvider>
        {children}
      </BuyerProvider>
    </SellerProvider>
  )
};

export default Providers;