"use client";

import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Importações para que os contexts sejam globais
import { ProductsDataProvider } from "@/useContext/data/useProductData";
import { ShoppingProvider } from "@/useContext/shopping/useShopping";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <QueryClientProvider client={queryClient}>
        <ProductsDataProvider>
          <ShoppingProvider>{children}</ShoppingProvider>
        </ProductsDataProvider>
      </QueryClientProvider>
    </ProviderStyle>
  );
};

export default Providers;
