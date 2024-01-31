import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const theme = {
  colors: {
    blueNoir1: '#313849', // bleu foncé
    blueNoir2: '#20242E', // blue foncé+
    blueNoir3: '#1E222C', // bleu foncé++
    primary: 'red',
    secondary: 'white',
    tercary: 'black',
    quaternary: 'darkgrey',
  },
};

root.render(
  
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider> 
);