import React from 'react';

import * as SC from './styles';

const ContentBox: React.FC = ({ children }) => {
  return <SC.Container>{children}</SC.Container>;
};

export default ContentBox;
