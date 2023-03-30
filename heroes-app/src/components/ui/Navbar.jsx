import {useContext} from 'react';
import {AuthContext} from '../../auth/authContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import {ContainerLinks, ContainerLogout, Nav, Button} from '../../styled/navbar';
import {types} from '../../types/types';

const Navbar = () => {

  const navigate = useNavigate()

  const { user, dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({ type: types.logout })

    navigate('/login',{
      replace: true
    })
  }

  return (
    <Nav>

      <ContainerLinks>
        <Link
          className="navbar-br"
          to="/auth/"
        >
          Heroes App
        </Link>

        <div>

          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to="/auth/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to="/auth/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to="/auth/search"
          >
            Search
          </NavLink>
        </div>
      </ContainerLinks>

      <ContainerLogout ded="red">
          <span>{ user.name }</span>

          <Button
            onClick={ handleLogout }
          >
            Logout
          </Button>
      </ContainerLogout>
    </Nav>
  )
}

export default Navbar
