import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import light from './assets/styles/themes/light/styles';

import Header from './components/Header';
import MainContent from './components/MainContent';
import FirstPage from './components/FirstFrame';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
      <MainContent>
        <FirstPage />
      </MainContent>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}

export default App;
