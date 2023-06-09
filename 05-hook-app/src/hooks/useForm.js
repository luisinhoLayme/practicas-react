import React from 'react'

const useForm = ( initialState = {} ) => {

  const [values, setValues] = React.useState(initialState);

  const reset = () => {
    setValues( initialState )
  }

  const handleInputChange = ({ target }) => {

    setValues({
      ...values,
      [ target.name ]: target.value
    })

  }

  return [ values, handleInputChange, reset ];

}

export { useForm };
