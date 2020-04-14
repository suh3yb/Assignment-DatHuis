import React from 'react';
import { ThemeProvider } from 'styled-components';

import ContactSelection from './components/ContactSelection';
import theme from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContactSelection />
      <ContactSelection />
      <ContactSelection />
      <ContactSelection />
      <ContactSelection />
      <ContactSelection />
    </ThemeProvider>
  );
};

export default App;
