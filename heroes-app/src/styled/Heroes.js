import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  animation: ${ fadeIn } .4s ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: .5rem;
  overflow: hidden;
  display: flex;
  animation: ${ fadeOut } .9s ease;
`;

export const CardImage = styled.div`
  flex: 0 0 30%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
`;

export const CardBody = styled.div`
  flex: 0 0 70%;
  padding: .3rem .7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h5 {
    font-size: 1rem;
  }

  p {
    font-family: Verdana;
    font-size: .9rem;
  }

  small {
    color: #aaa;
  }
`;

