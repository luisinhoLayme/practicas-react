import JournalEntries from './JournalEntries'

import { GiFalconMoon } from 'react-icons/gi';
import { BsClipboardPlus } from 'react-icons/bs';
import { ButtonJournal } from '../../styles/globalStyles';
import { Menu, SidebarContainer, ButtonEntry, Box } from './Journal.styled'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { startNewNote } from '../../redux/actions/notes';

const Sidebar = () => {

  const dispatch = useDispatch()
  const { name } = useSelector( state => state.auth )

  const handleLogout = () => {
    dispatch( startLogout() )
  }

  const handleAddNew = () => {
    dispatch( startNewNote() )
  }

  return (
    <SidebarContainer>
      <Box>
        <Menu>
          <div>
            <GiFalconMoon />
            <span> { name }</span>
          </div>
          <ButtonJournal
            onClick={ handleLogout }
          >
            Logout
          </ButtonJournal>
        </Menu>

        <ButtonEntry
          onClick={ handleAddNew }
        >
          <BsClipboardPlus className="icon" />
          <span>New entry</span>
        </ButtonEntry>
      </Box>

      <JournalEntries />
    </SidebarContainer>
  )
}

export default Sidebar
