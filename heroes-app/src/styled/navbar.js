import styled from 'styled-components';


const Nav = styled.nav`
  background-color: #2C2A32;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1.5rem 1rem;

  .navbar-br {
    color: #f1f1f1;
    text-shadow: 1px 1px 3px #ccc,
                 5px 5px 5px #fff;
  }

  a {
    text-decoration: none;
    color: #ccc;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  div > a {
    margin-right: 1rem;
    &.active {
      color: #fff;
      text-shadow: 4px 4px 3px #fff;
    }
  }
`;

const ContainerLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    color: #3DA2C2;
    margin 0 .7rem;
    display: block;
  }
`;

const Button = styled.button`
  border: 4px solid transparent;
  background-color: transparent;
  padding: .5rem 1rem;
  border-radius: .6rem;
  cursor: pointer;
  color: #aaa;
  transition: border-color .6s ease;

  &:hover {
    border-color: #ccc;
  }
`;

export {
  Nav,
  ContainerLinks,
  ContainerLogout,
  Button
}
