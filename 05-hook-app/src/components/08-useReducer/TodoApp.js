import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import TosoList from './TodoList';
import TodoAdd from './TodoAdd';
import './styles.css';

// Estado inicial
const init = () =>{
  //* El parse retorna de string a json, si no hay nada retorna un []
  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }];
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);



  // Por cada cambio que haga el todo se agrega al localStorage
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos]);

  const handleDelete = ( todoId ) => {

    // crear la action
    const action = {
      type: 'delete',
      payload: todoId
    }

    // dispatch
    dispatch( action )
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = ( newTodo ) => {

    dispatch({
      type: 'add',
      payload: newTodo
    });

  }


  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <TosoList
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>
        <div className="col-5">
          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>

    </div>
  )
}

export default TodoApp;
