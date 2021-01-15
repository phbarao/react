import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #262626;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;
  overflow-x: hidden;

  .home-card {
    border: 1px solid white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 40px 0;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    strong {
      color: #48c9b0;
      margin-top: 10px;
    }
  }

  @media (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
