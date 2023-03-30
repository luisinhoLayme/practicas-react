import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

  const { state, increment, reset, decrement } = useCounter( 100 );

  return (
    <>
      <p>luisinho el pro de la ali.</p>
      <h1>Counter with Hook: { state }</h1>

      <hr />


      <button onClick={ () => increment(2) } className="btn btn-outline-danger"> + 1</button>
      <button onClick={ reset } className="btn btn-outline-danger md-ml-2"> reset </button>
      <button onClick={ () => decrement(2) } className="btn btn-outline-danger"> - 1</button>
    </>
  )
}

export default CounterWithCustomHook;
