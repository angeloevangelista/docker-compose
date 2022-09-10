import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border: dashed 1px #97bef4;
  border-radius: 20px;
  background-color: #f6f8fb;

  img {
    max-width: 140px;
  }

  span {
    color: #bdbdbd;
  }
`;
