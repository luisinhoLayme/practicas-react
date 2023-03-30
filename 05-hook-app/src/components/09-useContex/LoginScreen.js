import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  const user = {
    id: 123,
    name: 'Luisinho el pro'
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setUser(user) }
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen;
