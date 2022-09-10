import { darken } from 'polished';
import styled, { css, CSSObject } from 'styled-components';

import { EButtonTheme } from '.';

const buttonThemes: { [key in EButtonTheme]: CSSObject } = {
  primary: {
    color: '#fff',
    backgroundColor: '#2F80ED',
  },
  secondary: {
    color: '#4F4F4F',
    backgroundColor: '#e0e0e0',
  },
  danger: {
    color: '#fff',
    backgroundColor: '#EF4444',
  },
};

export const Container = styled.button`
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-radius: 10px;

  transition: background-color 0.25s;

  ${(props): CSSObject => buttonThemes[props.theme as EButtonTheme]}

  ${(props) => css`
    outline-color: ${darken(
      0.25,
      String(buttonThemes[props.theme as EButtonTheme].backgroundColor),
    )};

    &:disabled {
      cursor: not-allowed;

      background-color: ${darken(
        0.15,
        String(buttonThemes[props.theme as EButtonTheme].backgroundColor),
      )};
    }

    &:not(:disabled):hover {
      background-color: ${darken(
        0.15,
        String(buttonThemes[props.theme as EButtonTheme].backgroundColor),
      )};
    }
  `}
`;
