import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../auth/authContext';
import {types} from '../../types/types';

const LoginScreen = () => {

  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name: 'Luisinho Layme'
      }
    }

    dispatch(action)

    // Obtener ruta para retornar donde se dejo 
    const lastPath = localStorage.getItem('lastPath') || 'auth/marvel'

    navigate( lastPath, {
      replace: true
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen;
