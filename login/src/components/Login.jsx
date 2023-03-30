import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [error, setError] = React.useState(null)
  const [esRegistro, setEsRegistro] = React.useState(true)

  const procesarDatos = e => {
    e.preventDefault()
    if(!email.trim()) {
      // console.log('Ingrese Email')
      setError('Ingrese un Email')
      return
    }
    if(!pass.trim()) {
      // console.log('Ingrese Pass')
      setError('Ingrese un Password')
      return
    }
    if(pass.length < 6) {
      // console.log('Password mayor a 6 caracteres')
      setError('Password de 6 caracteres o mas')
      return
    }
    setError(null)
    console.log('Pasando todas las validaciones');
    if(esRegistro) {
      registrar()
    } else {
      login()
    }
  }

  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user);
      setEmail('')
      setPass('')
      setError(null)
      props.history.push('/admin')
    } catch (e) {
      console.log(e);
      if(e.code === 'auth/user-not-found')
        setError('Email no registrado');
      
      if(e.code === 'auth/wrong-password')
        setError('Password no valido');
    }
  }, [email, pass, props.history])
    
  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass)
      console.log( res.user )
      await db.collection('usuarios').doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid
      })
      await db.collection(res.user.uid).add({
        name: 'Tarea de ejemplo',
        fecha: Date.now()
      })
      setEmail('')
      setPass('')
      setError(null)
      props.history.push('/admin')
    } catch (e) {
      console.log(e);
      if(e.code === 'auth/invalid-email')
      setError('email no valido xd');
      
      if(e.code === 'auth/email-already-in-use')
      setError('email ya existe');
    }
  }, [email, pass, props.history])
    
  return (
    <div className="mt-5">
      <h3 className="text-center">
        {
          esRegistro ? 'Registro de usuarios' : 'Login de usuario'
        }
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col sm-8 col-md-6 col-xl-4">
          <form onSubmit={ procesarDatos }>
            { 
              error && (
                <div className="alert alert-danger">
                  { error }
                </div>
              )
            }
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingre un email"
              onChange={ e => setEmail(e.target.value) }
              value={ email }
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese un pasword"
              onChange={ e => setPass(e.target.value) }
              value={ pass }
            />
            <button
              className="btn btn-dark btn-lg btn-block"
              type="submit"
            >
              {
                esRegistro ? 'Registrarse' : 'Acceder'
              }
            </button>
            <button 
              className="btn btn-info btn-sm btn-block"
              type="button"
              onClick={ () => setEsRegistro(!esRegistro) }
            >
              {
                esRegistro ? 'Ya esta registrado?' : 'no tienes cuenta'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
