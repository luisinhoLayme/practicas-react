import {Nothing} from './Journal.styled'
import {GiSeaStar} from 'react-icons/gi'

const NothingSelected = () => {
  return (
    <Nothing>
      <div>
        Select Something <br />
        create an entry <br />
        <GiSeaStar className="icon" />
      </div>
    </Nothing>
  )
}

export default NothingSelected
