import styled, {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({theme}) => theme.fonts.primary};
    overflow: hidden;
  }
`

// styles for auth
export const ContainerAuth = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBox = styled.div`
  background-color: ${({theme}) => theme.colors.darkGrey};
  box-shadow: 0px 0px .2rem .2rem ${({theme}) => theme.colors.darkGrey};
  border-radius: .7rem;
  width: 30rem;

  & > div {
    padding: 1.2rem;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: .5rem;
  background-color: ${({theme}) => theme.colors.darkCyan};
  // box-shadow: 3px 3px .2rem .2rem ${({theme}) => theme.colors.lightGrey};
  box-shadow: inset 0px 0px .2rem .2rem ${({theme}) => theme.colors.darkGrey};
  color: ${({theme}) => theme.colors.darkLuisinho};
  cursor: pointer;
  outline: none;
  padding: 1rem 0;
  font-weight: 600;
  text-align: center;
  width: 100%;
  transition: box-shadow .3s ease,
              color .4s ease-out;

  &:hover {
    // background-color: ${({theme}) => theme.colors.primaryActive};
    box-shadow: 0px 0px .2rem .2rem ${({theme}) => theme.colors.darkGrey};
    color: ${({theme}) => theme.colors.lightGrey};
  }
`;

// Styles Journal Screen

export const JournalContainer = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  display: grid;
  grid-template-columns: 40% 60%;
`;

export const ButtonJournal = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  outline: none;
  border-radius: .4rem;
  color: ${({theme}) => theme.colors.white};
  padding: .4rem .8rem;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    border: 2px solid ${({theme}) => theme.colors.lightGrey};
  }
`;


export default GlobalStyle;
