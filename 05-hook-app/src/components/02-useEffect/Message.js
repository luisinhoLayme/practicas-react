import React from 'react'

const Message = () => {

  const [cords, setCords] = React.useState({ x: 0, y: 0 });
  const { x, y } = cords;

  React.useEffect(() => {

    const mouseMove = (e) => {
      const cords = { x: e.x, y: e.y };
      setCords( cords );
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }

  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        x:{ x } y:{ y }
      </p>
    </div>
  )
}

export default Message;
