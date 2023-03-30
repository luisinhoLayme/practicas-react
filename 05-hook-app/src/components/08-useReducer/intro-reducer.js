// estado inicial
const initialState = [{
  id: 1,
  todo: 'Camprar pan',
  done: false
}];

// definimos nuestro reducer
const todoReducer = ( state = initialState, action ) => {
  // la accion modifica el state
  if ( action?.type === 'agregar' ) {
    return [ ...state, action.payload ]
  }

  // siempre regresa un nuevo estado
  return state;
}

// inicializacion del reducer
let todos = todoReducer();

// agregar nuevo todo
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
}

// agregar mendiante una accion
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

// y le mandamos al reducer
todos = todoReducer( todos, agregarTodoAction )

console.log(todos)
