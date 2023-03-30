import styled, {keyframes} from 'styled-components'
import {Button} from '../../styles/globalStyles'
import google from '../../assets/g-1.jpg'

const scale = keyframes`
  from {
    transform: scale(1, 0);
  }
  to {
    transform: scale(1, 1);
  }
`

export const Login = styled.div`
  transform-origin: top center;
  animation: ${ scale } .5s ease;
`;

export const Register = styled.div`
  transform-origin: bottom center;
  animation: ${ scale } .5s ease;
`;

export const Title = styled.h3`
  color: ${({theme}) => theme.colors.lightGrey};
  margin: .9rem 0;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkLuisinho};
  color: ${({theme}) => theme.colors.lightGrey};
  outline: none;
  opacity: .8;
  padding: .5rem .5rem .5rem 0;
  margin-bottom: 1rem;

  &:focus {
    border-bottom: 1.888px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

//Styles google button
export const ButtonGoogle = styled(Button)`
  // background-color: ${({theme}) => theme.colors.googleBlue};
  background-image: ${`url(${google})`};
  background-size: 11%;
  background-repeat: no-repeat;
  background-position: .5rem .7rem;
  text-align: right;
  font-size: 1.5rem;
  padding: 1.3rem 4.5rem;
`;

export const Paragraph = styled.p`
  color: ${({theme}) => theme.colors.lightGrey};
  margin: 2rem 0 .3rem;
  font-weight: 600;
  font-size: 1.4rem;
  text-align: center;
`;

export const Links = styled.a`
  display: block;
  margin-top: 1.7rem;
  text-decoration: none;
  color: ${({theme}) => theme.colors.lightGrey};

  &:hover {
    text-decoration: underline;
  }
`;


