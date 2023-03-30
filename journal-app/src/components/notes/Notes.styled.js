import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({theme}) => theme.colors.darkCyan};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const ContainerNotes = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 71rem;
`

export const Form = styled.form`
  /* min-height: 50rem; */

  input {
    width: 100%;
    font-weight: 700;
    font-size: 2rem;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    height: 40.8rem;
    width: 100%;
    border: none;
    outline: none;
  }
`

export const Image = styled.div`
  box-shadow: 5px 5px 2px 1px ${({theme}) => theme.colors.darkGrey};
  width: 40%;
  background-color: blanchedalmond;
  height: 15rem;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`

export const Delete = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #ff6666;
  color: #fff;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: #ea6962;
  }
`
