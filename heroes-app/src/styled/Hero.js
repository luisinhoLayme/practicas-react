import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: .8rem;
  padding-top: 2rem;
`;

const imgAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Image = styled.div`
  border: .1rem solid #ccc;
  border-radius: .5rem;
  animation: ${ imgAnimate } .8s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    border: .5rem solid transparent;
  }
`;

const bodyAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Body = styled.div`
  animation: ${ bodyAnimate } .8s ease-out;

  h3, h4 {
    color: #151515;
    margin: 1rem 0;
    font-family: Verdana;
  }

  li {
    margin: .8rem 0 .8rem 1rem;

    b {
      font-size: .8rem;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #59C9FF;
  color: #59C9FF;
  padding: .5rem 1rem;
  margin-top: 1rem;
  border-radius: .3rem;
  cursor: pointer;
  transition: background-color .4s ease-in-out,
              color .4s ease-in-out;

  &:hover {
    background-color: #59C9FF;
    color: #fff;
  }
`;
