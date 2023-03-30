import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  h3 {
    margin: .7rem 0;
  }

  & > div {
    padding-top 1rem;
  }

  & hr {
    margin-bottom: 1rem;
  }

  .space {
    margin: .5rem 0;
  }
`;

export const Form = styled.form`

  input {
    width: 100%;
    padding: .4rem .3rem;
    border: 1px solid #a1a1a1;
    border-radius: .4rem;
    outline: none;

    &:focus {
      box-shadow: 0px 0px 3px #a1a1a1 inset;
    }
  }

  button {
    border: 1px solid #4A72C7;
    background-color: transparent;
    border-radius: .4rem;
    outline: none;
    padding: .6rem .8rem;
    margin-top: .7rem;
    cursor: pointer;
    color: #4A72C7;
    transition: background-color .4s ease,
                color .4s ease;

    &:hover {
      background-color: #4A72C7;
      color: #fff;
    }
  }
`;

export const AlertInfo = styled.div`
  color: #96b0ff;
  background-color: #D2EFFD;
  border-radius: .4rem;
  padding: 1rem .5rem;
`;

export const AlertDanger = styled.div`
  color: #CC7476;
  background-color: #ffc6bb;
  border-radius: .4rem;
  padding: 1rem .5rem;
`;
