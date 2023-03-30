import React from 'react'
import './effects.css'
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = React.useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  React.useEffect(() => {
    // console.log('luisinho!');
  }, []);

  React.useEffect(() => {
    // console.log('formState cambio');
  }, [formState]);

  React.useEffect(() => {
    // console.log('email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {

    setFormState({
      ...formState,
      [ target.name ]: target.value
    })

  }

  return (
    <>
      <h1>useEffetct</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      {(name === '123') && <Message />}

    </>
  )
}

export default SimpleForm;
