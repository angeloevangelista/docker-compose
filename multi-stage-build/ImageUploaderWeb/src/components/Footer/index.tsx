import React from 'react';

import * as SC from './styles';

interface IFooterProps {
  username: string;
}

const Footer: React.FC<IFooterProps> = ({ username }) => {
  return (
    <SC.Container>
      created by{' '}
      <a target="blank" href={`https://github.com/${username}`}>
        {username}
      </a>{' '}
      - devChallenges.io
    </SC.Container>
  );
};

export default Footer;
