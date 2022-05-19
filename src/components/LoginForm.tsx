import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { useLogin } from '../hooks/auth/useLogin';
import { RouteList } from '../common/enums/routes.enum';
import { useAuth } from '../hooks/auth/useAuth';
import { ICredentials } from '../common/interfaces/user.interface';

const Login: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>();
  const { isLoginLoading, login, isError, error, isSuccessLogin } = useLogin();

  return (
    <>
      {(isSuccessLogin || isAuthenticated) && <Navigate to={RouteList.DASHBOARD} />}
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Card className="p-4">
                <form onSubmit={handleSubmit(credentials => login(credentials))}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <div className="mb-3">
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">@</span>
                      <InputText {...register('email')} type="email" placeholder="name@example.com" required />
                    </div>
                    {isError && error?.code === 422 && <small className="p-error">{error.details?.email}</small>}
                    {errors.email && <small className="p-error">{errors.email.message}</small>}
                  </div>
                  <div className="mb-3">
                    <div className="p-inputgroup">
                      <div className="p-inputgroup-addon">
                        <i className={PrimeIcons.LOCK}></i>
                      </div>
                      <InputText {...register('password')} type="password" placeholder="Password" required />
                    </div>
                    {isError && error?.code === 422 && <small className="p-error">{error.details?.password}</small>}
                    {isError && error?.code === 400 && <small className="p-error">{error.message}</small>}
                    {errors.password && <small className="p-error">{errors.password.message}</small>}
                  </div>
                  <div className="row">
                    <div className="col me-auto">
                      <Button color="primary" className="px-4" loading={isLoginLoading} type="submit" label="Login" />
                    </div>
                    {/*<div className="col text-end">*/}
                    {/*  <Button className="p-button-link" onClick={() => toast('test')}>*/}
                    {/*    Forgot password?*/}
                    {/*  </Button>*/}
                    {/*</div>*/}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
