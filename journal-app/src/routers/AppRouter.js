import AuthRouter from './AuthRouter';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { JournalScreen } from '../components';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../redux/actions/notes';

const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      // Si el user tiene algo, pregunta si tiene el uid, si el null se sale
      if ( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) )
        setIsLoggedIn(true)
        // startLoadingNotes hacemos asi para optimisar
        dispatch( startLoadingNotes(user.uid) )

      } else {
        setIsLoggedIn(false)
        console.log('User not exists')
      }
      setChecking(false)
    })
  }, [ dispatch, setChecking ])

  if ( checking ) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={
          <PublicRoute isLoggedIn={ isLoggedIn }>
            <AuthRouter />
          </PublicRoute>
          }
        />
        <Route path="/" element={
          <PrivateRoute isLoggedIn={ isLoggedIn }>
            <JournalScreen />
          </PrivateRoute>
          }
        />
        <Route path="*" element={ <Navigate to="/auth/login" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
