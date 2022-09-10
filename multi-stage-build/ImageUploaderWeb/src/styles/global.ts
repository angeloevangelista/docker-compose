import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FAFAFB;
  }
  
  body, textarea, input, button {
    color: #4F4F4F;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100vh;
  }
`;
