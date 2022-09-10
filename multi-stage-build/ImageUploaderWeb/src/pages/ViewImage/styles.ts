import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    position: absolute;

    top: 40px;
    left: 40px;

    text-decoration: none;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #219653;
  }

  strong {
    margin: 4px 0;
    font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 400px;

  overflow: hidden;
  border-radius: 20px;

  margin: 12px 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
