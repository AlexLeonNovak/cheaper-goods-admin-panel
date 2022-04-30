import React, { SyntheticEvent, useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked } from '@coreui/icons';
import { useLogin } from '../../hooks/auth/useLogin';
import { toast } from '../../common/utils/toast';
import { Navigate } from 'react-router-dom';
import { RouteList } from '../../common/enums/routes.enum';
import { useAuth } from '../../hooks/auth/useAuth';
// import { useAuth } from '../hooks/auth/useAuth';
// import { useAuth } from '../hooks/auth/useAuth';
// import { useLoginMutation } from '../services/auth';

const Login: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoginLoading, login, isError, error, isFail } = useLogin();
  const isValidationError = isError && !isFail && error?.response?.status === 422;
  const isBadRequestError = isError && !isFail && error?.response?.status === 400;

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    await login({ email, password });
  };
  useEffect(() => {
    if (isFail) {
      toast.error(error?.message || 'Error');
    }
  }, [isFail, error]);

  return (
    <>
      {isAuthenticated && <Navigate to={RouteList.DASHBOARD} />}
      {/*{isSuccessLogin && <Navigate to={RouteList.HOME} />}*/}
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleLogin}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          type="text"
                          placeholder="name@example.com"
                          onInput={e => setEmail(e.currentTarget.value)}
                          required
                          invalid={isError && !isFail}
                          feedbackInvalid={isValidationError && error?.response?.data.details?.email?.join('<br>')}
                          // valid={isSuccess}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText id="passPrepend">
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          onInput={e => setPassword(e.currentTarget.value)}
                          aria-describedby="passPrepend"
                          required
                          invalid={isError && !isFail}
                          // valid={isSuccess}
                          feedbackInvalid={isValidationError && error?.response?.data.details?.password?.join('<br>')}
                        />
                        {isBadRequestError && <CFormFeedback invalid>{error?.response?.data.message}</CFormFeedback>}
                      </CInputGroup>
                      <CRow>
                        <CCol className="me-auto">
                          <CButton color="primary" className="px-4" disabled={isLoginLoading} type="submit">
                            {isLoginLoading && (
                              <CSpinner className="mr-05" component="span" size="sm" aria-hidden="true" />
                            )}
                            Login
                          </CButton>
                        </CCol>
                        <CCol className="text-end">
                          <CButton color="link" className="px-0" onClick={() => toast('test')}>
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;
