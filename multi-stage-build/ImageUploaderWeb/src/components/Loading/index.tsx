import React from 'react';

import * as SC from './styles';

interface ILoadingProps {
  text?: string;
}

const Loading: React.FC<ILoadingProps> = ({ text }) => {
  return (
    <SC.Container>
      <strong>{text}</strong>

      <SC.RunningBar />
    </SC.Container>
  );
};

export default Loading;
