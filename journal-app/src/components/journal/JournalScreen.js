import { useSelector } from 'react-redux';
import { JournalContainer } from '../../styles/globalStyles';
import NoteScreen from '../notes/NoteScreen';
import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {

  const { active } = useSelector( state => state.notes )

  return (
    <JournalContainer>
      <Sidebar />

      <main>
        {
          !active
            ? <NothingSelected />
            : <NoteScreen />
        }
      </main>
    </JournalContainer>
  )
}

export default JournalScreen;
