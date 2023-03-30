import styled from 'styled-components'
import {ButtonJournal} from '../../styles/globalStyles';


export const SidebarContainer = styled.aside`
  background-color: ${({theme}) => theme.colors.darkGrey};
  height: 100vh;
`;

export const Box = styled.div`
  text-align: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  color: ${({theme}) => theme.colors.white};
`;

export const ButtonEntry = styled(ButtonJournal)`
  border: none;

  &:hover {
    border: none;
    color: #aaa;
  }

  .icon {
    font-size: 6rem;
  }

  span {
    display: block;
  }
`;

// Journal Entries

export const Entries = styled.div`
  padding: 2rem 1rem;
  max-height: 80vh;
  margin-top: 1rem;
  overflow-y: auto;
`;

export const Entry = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: .5rem;
  overflow: hidden;
  display: flex;
  margin-bottom: 1rem;
  cursor: pointer;
  height: 8rem;
`;

export const Image = styled.div`
  background-color: #101010;
  width: 25%;
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Bodyy = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: .8rem;

  h4, p {
    margin: 0;
  }

  p {
    font-size: 1.4rem;
  }

  span {
    display: block;
    font-weight: bold;
    text-align: center;
  }
`;

export const Nothing = styled.div`
  background-color: ${({theme}) => theme.colors.darkCyan};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: ${({theme}) => theme.colors.white};
    text-align: center;

    .icon {
      width: 6rem;
      height: 6rem;
    }
  }
`;
