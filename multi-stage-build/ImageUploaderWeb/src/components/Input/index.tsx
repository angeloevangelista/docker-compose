import React from 'react';

import Button, { IButtonProps } from '../Button';

import * as SC from './styles';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  useButton?: boolean;
  buttonProps?: IButtonProps;
}

type InputType = React.ForwardRefExoticComponent<
  IInputProps & React.RefAttributes<HTMLInputElement>
>;

const Input: InputType = React.forwardRef(
  ({ useButton, buttonProps, children, ...restProps }, forwardReference) => {
    return (
      <SC.Container {...restProps}>
        <input ref={forwardReference} {...restProps} />

        {useButton && buttonProps && (
          <Button {...buttonProps}>{buttonProps.children}</Button>
        )}
      </SC.Container>
    );
  },
);

export default Input;
