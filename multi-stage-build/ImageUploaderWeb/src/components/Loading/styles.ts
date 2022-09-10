import styled, { keyframes } from 'styled-components';

const run = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(200px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RunningBar = styled.div`
  position: relative;

  margin-top: 20px;

  width: 200px;
  height: 4px;

  overflow: hidden;

  background-color: #f2f2f2;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;

    width: 50%;
    height: 4px;

    border-radius: 4px;
    background-color: #2f80ed;

    animation: ${run} 1s infinite ease-out 0s;
  }
`;
