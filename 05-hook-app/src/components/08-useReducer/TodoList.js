import React from 'react'
import TodoListItem from './TodoListItem'

const TosoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, i) => (
          <TodoListItem
            key={ todo.id }
            todo={ todo }
            index={ i }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        ))
      }
    </ul>
  )
}

export default TosoList;
