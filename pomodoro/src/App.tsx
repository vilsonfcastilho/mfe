import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';

import { CyclesContextProvider } from './contexts/CyclesContext';

import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter basename='/react-pomodoro-app'>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
