import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 24px;
  }

  span {
    margin-top: 20px;

    font-size: 16px;
    color: #828282;
  }

  margin-bottom: 20px;
`;

export const UploadContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    display: block;
    margin: 20px 0;

    color: #bdbdbd;
  }
`;
