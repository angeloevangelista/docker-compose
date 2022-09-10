import React from 'react';
import Footer from '../../components/Footer';

import * as SC from './styles';

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <SC.WrapperContainer>
      <SC.PageContainer>{children}</SC.PageContainer>

      <Footer username="angeloevangelista" />
    </SC.WrapperContainer>
  );
};

export default DefaultLayout;
