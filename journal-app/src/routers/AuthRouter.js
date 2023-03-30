import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../components';
import { ContainerAuth, ContainerBox } from '../styles/globalStyles';

const AuthRouter = () => {

  return (
    <ContainerAuth>
      <ContainerBox>
        <Routes>
          <Route index path="login" element={ <LoginScreen /> } />
          <Route path="register" element={ <RegisterScreen /> } />
          <Route path="*" element={ <Navigate to="login" /> } />
        </Routes>
      </ContainerBox>
    </ContainerAuth>
  )
}

export default AuthRouter;
