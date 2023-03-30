import React, { useCallback } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

  const [counter, setCounter] = React.useState( 10 );

  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  const increment = useCallback( (num) => {
    setCounter( c => c + num )
  }, [ setCounter ])

  React.useEffect(() => {
    // ???
  }, [ increment ]);

  return (
    <div>
      <h1>useCallback Hook: { counter }</h1>
      <hr/>

      <ShowIncrement increment={ increment } />

    </div>
  )
}

export default CallbackHook;
