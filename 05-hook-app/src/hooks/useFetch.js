import React, { useRef } from 'react'

const useFetch = ( url ) => {

  const isMounted = useRef(true);
  const [state, setState] = React.useState({ data: null, loading: true, error: null });

  React.useEffect(() => {

    return () => {
      isMounted.current = false;
    }

  }, []);

  React.useEffect(() => {

    setState({ data: null, loading: true, error: null });

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        if( isMounted.current ) {
          setState({
            loading: false,
            error: null,
            data
          })
        }

      })
      .catch(err => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info'
        })
      })

  }, [url]);

  return state;

}

export { useFetch };
