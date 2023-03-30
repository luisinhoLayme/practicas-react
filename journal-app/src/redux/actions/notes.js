import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/firebase-config'
import { fileUpload } from '../../helpers/fileUpload'
import { loadNotes } from '../../helpers/loadNotes'
import { types } from '../types/types'

export const startNewNote = () => {
  // getState muestro todo el state, como el useSelector
  return async( dispatch, getState ) => {
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime() // fecha al momento de crear
    }

    // const doc = await db.collection(`${ uid }/journal/notes`).add( newNote )
    // added notes to db
    const notes = await addDoc(collection(db, uid, 'journal', 'notes'), newNote)

    dispatch( activeNote(notes.id, newNote) )
    // dispatch al addNewNote
    dispatch( addNewNote( notes.id, newNote ) )
  }
}

export const activeNote = ( id , note ) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

// para que aparescan las notas en el sidebar sin refrescar
export const addNewNote = ( id, note ) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note
  }
})

// carga las notas
export const startLoadingNotes = ( uid ) => {
  return async( dispatch ) => {

    // mandamos uid para obtener las notas
    const notes = await loadNotes(uid)
    dispatch( setNotes(notes) )

  }
}

export const setNotes = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
})

// actualizar la nota
export const startSaveNote = ( note ) => {
  return async( dispatch, getState ) => {
    const { uid } = getState().auth

    // eliminar la url si esta undefined para que no marque error firebase
    if (!note.url) {
      delete note.url
    }
    // para poder eliminar solo el id de noteToFirestore y no de note
    const noteToFirestore = { ...note }
    // eliminando el id
    delete noteToFirestore.id

    //actualizamos
    const noteRef = doc(db, uid, 'journal', 'notes', note.id)
    await updateDoc(noteRef, noteToFirestore)

    dispatch( refreshNote(note.id, noteToFirestore) )
  }
}

// refresca la barra lateral
export const refreshNote = ( id, note ) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

//subir imagen
export const startUpLoading = ( file ) => {
  return async ( dispatch, getState ) => {
    const { active: activeNote } = getState().notes

    // Aqui mostrar el loading de carga de img
    // con Swal o con cualquira

    const fileUrl = await fileUpload( file )
    //actualizamos el url
    activeNote.url = fileUrl

    dispatch( startSaveNote( activeNote ) )

    // Aqui le quitamos el Swal
  }
}

export const startDeleting = ( id ) => {
  return async ( dispatch, getState ) => {
    const uid = getState().auth.uid

    await deleteDoc(doc(db, uid, 'journal', 'notes', id))

    dispatch( deleteNote(id) )
  }
}

export const deleteNote = ( id ) => ({
  type: types.notesDelete,
  payload: id
})

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
})
