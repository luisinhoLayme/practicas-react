import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    // Nuevo todo para agregar al reducer
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo( newTodo )
    reset()

  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr/>

      <form action="#" onSubmit={ handleSubmit }>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={ description }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-2 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

export default TodoAdd;
