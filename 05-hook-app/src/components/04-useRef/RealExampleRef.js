import React from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './../02-useEffect/effects.css';

const RealExampleRef = () => {

  const [show, setShow] = React.useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr/>

      { show && <MultipleCustomHooks /> }

      <button
        className="btn btn-primary mt-3"
        onClick={ () => setShow( !show ) }
      >
        Show/Hide
      </button>
    </div>
  )
}

export default RealExampleRef;
