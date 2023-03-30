import { Entry, Image, Bodyy } from './Journal.styled'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../redux/actions/notes'

const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch()

  const f = (d, dmy) => {
    let noteDate = dayjs(d).format(dmy)
    return noteDate
  }

  const handleEntryClick = () => {
    dispatch( activeNote(id, {date, title, body, url}) )
  }

  return (
    <Entry onClick={ handleEntryClick }>
      {
        url &&
          <Image>
            <img src={ url } alt="image entry" />
          </Image>
      }

      <Bodyy>
        <div>
          <h4>{ title }</h4>
          <p>{ body }</p>
        </div>
        <p>{ f(date, 'MMM') } <span>{ f(date, 'D') }</span></p>
      </Bodyy>
    </Entry>
  )
}

export default JournalEntry
