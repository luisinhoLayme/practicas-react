import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../redux/actions/notes'
import { ContainerNotes, Form, Image } from './Notes.styled'

const NotesAppBar = ({ setIdNote }) => {

  const dispatch = useDispatch()

  const { active: note } = useSelector( state => state.notes )
  const [ values, handleInputChange, reset ] = useForm(note)
  const { title, body, id } = values

  const activeId = useRef( note.id )
  useEffect(() => {
    if ( note.id !== activeId.current ) {
      reset( note )
      activeId.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch( activeNote( values.id, { ...values } ) )
    setIdNote(id)
  }, [values, dispatch])

  return (
    <ContainerNotes>
      <Form>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Some awesome title"
          value={ title }
          onChange={ handleInputChange }
        />
        <textarea
          name="body"
          id=""
          placeholder="Waht Happend toda"
          value={ body }
          onChange={ handleInputChange }
        ></textarea>
      </Form>
      {
        note.url &&
        <Image>
          <img src={ note.url } alt="image note app" />
        </Image>
      }
    </ContainerNotes>
  )
}

export default NotesAppBar
