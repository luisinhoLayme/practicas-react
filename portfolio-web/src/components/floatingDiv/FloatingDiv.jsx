import './Floating.css'

// You are at minute 42:00

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={ image } alt="image floatingdiv" />
      <span>
        { txt1 }
        <br />
        { txt2 }
      </span>
    </div>
  )
}

export default FloatingDiv
