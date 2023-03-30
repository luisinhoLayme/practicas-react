import { ButtonJournal } from '../../styles/globalStyles'
import NotesAppBar from './NotesAppBar'
import { Delete, Header } from './Notes.styled'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting, startSaveNote, startUpLoading } from '../../redux/actions/notes'
import { useState } from 'react'

const NoteScreen = () => {

  const dispatch = useDispatch()
  const { active } = useSelector( state => state.notes )

  const [ idNote, setIdNote ] = useState(null)

  const handleSave = () => {
    dispatch( startSaveNote( active ) )
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if ( file ) {
      dispatch( startUpLoading( file ) )
    }
  }

  // function for delete note
  const handleDelete = () => {
    console.log(idNote)
    dispatch( startDeleting( idNote ) )
  }

  return (
    <div>
      <Header>
        <p>28 de agosto 2022</p>
        <input
          id='fileSelector'
          type="file"
          name="file"
          style={{display: 'none'}}
          onChange={ handleFileChange }
        />
        <div>
          <ButtonJournal
            onClick={handlePictureClick}
          >
            Picture
          </ButtonJournal>

          <ButtonJournal
            onClick={ handleSave }
          >
            Save
          </ButtonJournal>
        </div>
      </Header>
      <NotesAppBar setIdNote={ setIdNote } />
      <Delete
        type='button'
        onClick={ handleDelete }
      >
        Delete
      </Delete>
    </div>
  )
}

export default NoteScreen
