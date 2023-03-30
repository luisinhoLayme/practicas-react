import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { startRegisterWithEmailPasswordName } from '../../redux/actions/auth'
import { RemoveError, setError } from '../../redux/actions/ui'

import { Button } from '../../styles/globalStyles'
import { Input, Register, Title, Links } from './LoginRegister.styled'

const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector( state => state.ui )

  const [ values, handleInputChange ] = useForm({
    name: 'Luisinho',
    email: 'luis@luis.com',
    password: '123456',
    password2: '123456'
  })
  const { name, email, password, password2 } = values

  const handleRegister = (e) => {
    e.preventDefault()

    if ( isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName( email, password, name ) )
    }
  }

  const isFormValid = () => {

    if ( name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false
    } else if ( !validator.isEmail( email ) ) {
      dispatch(setError('Email in not valid'))
      return false
    } else if ( password !== password2 || password.length < 6 ) {
      dispatch(setError('Password should be at last 6 charaters and match each other'))
      return false
    }

    dispatch(RemoveError())

    return true
  }

  return (
    <Register>
      <Title>Register</Title>

      <form onSubmit={ handleRegister }>
        {
          msgError &&
            <div style={{
              backgroundColor: 'red',
              color: 'white',
              textAlign: 'center',
              padding: '1.1rem .2rem',
              borderRadius: '.4rem',
            }}>
              { msgError }
            </div>
        }

        <Input
          type="name"
          placeholder="Name"
          name="name"
          value={ name }
          onChange={ handleInputChange }
       />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={ password2 }
          onChange={ handleInputChange }
       />

        <Button
          type="submit"
        >
          Register
        </Button>
      </form>

      <Links as={Link} to="/auth/login">Login</Links>
    </Register>
  )
}

export default RegisterScreen;
