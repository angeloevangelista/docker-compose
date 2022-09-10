import React, { ButtonHTMLAttributes } from 'react';

import * as SC from './styles';

export enum EButtonTheme {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: EButtonTheme;
}

const Button: React.FC<IButtonProps> = ({ children, ...restProps }) => {
  return <SC.Container {...restProps}>{children}</SC.Container>;
};

export default Button;
