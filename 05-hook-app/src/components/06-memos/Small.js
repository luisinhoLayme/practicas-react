import React from 'react'

const Small = React.memo(({ value }) => {

  console.log( 'Me llame otravez :(' )

  return (
    <small>{ value }</small>
  )
})

export default Small;
