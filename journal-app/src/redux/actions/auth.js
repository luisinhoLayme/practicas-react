import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { googleAuthProvider } from '../../firebase/firebase-config';
import { types } from '../types/types'
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

// midellwers
// action async function
export const startLoginEmailPassword = (email, password) => {
  // return a callback
  return (dispatch) => {
    dispatch( startLoading() )
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch( login( user.uid, user.displayName ) )
        dispatch( finishLoading() )
      })
      .catch(err => {
        console.log(err)
        dispatch( finishLoading() )
      })
  }
}

//
export const startGoogleLogin = () => {
  return ( dispatch ) => {
    const auth = getAuth()
    signInWithPopup( auth, googleAuthProvider )
      .then( ({ user }) => {
        dispatch( login( user.uid, user.displayName ))
      })
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
  return ( dispatch ) => {
    const auth = getAuth()
    createUserWithEmailAndPassword( auth, email, password )
      // para no anidar mas el .then usamos async
      .then( async({ user }) => {

        await updateProfile(auth.currentUser, { displayName: name })

        dispatch( login( user.uid, user.displayName ))
      })
      .catch(e => console.log(e))
  }
}


// action normal
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})

// action for logout
export const startLogout = () => {
  return async ( dispatch ) => {
    const auth = getAuth()
    await signOut(auth)

    dispatch( logout() )
    dispatch( noteLogout() )
  }
}

export const logout = () => ({
  type: types.logout
})
