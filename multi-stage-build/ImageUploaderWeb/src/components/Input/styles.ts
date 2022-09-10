import styled, { css } from 'styled-components';
import { IInputProps } from '.';

export const Container = styled.div<Partial<IInputProps>>`
  width: 100%;
  height: 48px;

  display: flex;

  padding: 2px;

  border-radius: 10px;
  border: 1px solid #e0e0e0;

  ${(props) => css`
    background-color: ${props.readOnly ? '#f6f8fb' : '#fff'};
  `}

  input {
    flex: 1;

    border: 0;
    outline: #bbb;
    margin: 0 10px;
    line-height: 20px;

    background-color: transparent;
  }
`;
