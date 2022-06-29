import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './themes/globalStyles';
import TripleLogo from './images/triple2x.png';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <img src={TripleLogo} className='Triple-logo' alt='Not Found' />
    </div>
  );
}

export default App;
