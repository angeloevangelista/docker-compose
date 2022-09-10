import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
