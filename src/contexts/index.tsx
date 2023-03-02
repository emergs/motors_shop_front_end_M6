import { ReactNode } from 'react';
import SellerProvider from './Seller';
import ModalsProvider from './Modals';

interface IProvaiders {
  children: ReactNode;
}

const Providers = ({ children }: IProvaiders) => {
  return (

    <ModalsProvider>
      <SellerProvider>
        {children}
      </SellerProvider>
    </ModalsProvider>

  )
};

export default Providers;