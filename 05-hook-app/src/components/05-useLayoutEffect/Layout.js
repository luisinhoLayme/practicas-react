import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {

  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

  const { quote } = !!data && data[0];

  const pTag = React.useRef();
  const [boxSize, setBoxSize] = React.useState({});

  React.useLayoutEffect(() => {

    setBoxSize( pTag.current.getBoundingClientRect() );

  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className="blockquote text-end">
        <p
          className=""
          ref={ pTag }
        >
          { quote }
        </p>
      </blockquote>

      <pre>
        { JSON.stringify( boxSize, null, 3 ) }
      </pre>

      <button className="btn btn-primary" onClick={ increment }>
        Siguente Quote
      </button>

    </div>
  )
}

export default Layout;
