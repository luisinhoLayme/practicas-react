import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';
import { Button } from '../../styles/globalStyles';
import { Input, Title, Login, ButtonGoogle, Paragraph, Links } from './LoginRegister.styled';

const LoginScreen = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector( state => state.ui )

  const [ values, handleInputChange ] = useForm({
    email: 'luis@luis.com',
    password: '123456'
  })
  const { email, password } = values

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch( startLoginEmailPassword(email, password) )
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() )
  }

  return (
    <Login>
      <Title>Login</Title>

      <form onSubmit={ handleLogin }>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ handleInputChange }
         />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
       />

        <Button
          type="submit"
          disabled={ loading }
        >
          Login
        </Button>
      </form>

      <div>
        <Paragraph>Login with social networks</Paragraph>
        <ButtonGoogle
          onClick={ handleGoogleLogin }
        >
          Sing in width google
        </ButtonGoogle>
      </div>

      <Links as={Link} to="/auth/register">Create new account</Links>
    </Login>
  )
}

export default LoginScreen;
