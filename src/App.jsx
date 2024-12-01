import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import light from './assets/styles/themes/light/styles';

import Header from './components/Header';
import MainContent from './components/MainContent';
import FirstFrame from './components/FirstFrame';
import SecondFrame from './components/SecondFrame';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
      <MainContent>
        <FirstFrame />
        <SecondFrame />
      </MainContent>
    </ThemeProvider>
  );
}

export default App;
