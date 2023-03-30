import JournalEntry from './JournalEntry'
import { Entries } from './Journal.styled';
import { useSelector } from 'react-redux';

const JournalEntries = () => {

  const { notes } = useSelector( state => state.notes )

  return (
    <Entries>
      {
        notes.map(note => (
          <JournalEntry
            key={note.id}
            { ...note }
          />
        ))
      }
    </Entries>
  )
}

export default JournalEntries
