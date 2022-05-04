import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './AuthProvider';
import { ChildrenProps } from '../common/types/children-props.type';

const queryClient = new QueryClient();

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
};
