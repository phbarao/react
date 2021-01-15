import styled from 'styled-components';

export const PostsList = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none; */
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  li {
    width: 70%;
    max-width: 900px;

    background: #9999;
    border-radius: 5px;

    margin-top: 20px;
    padding: 20px;
  }
`;
