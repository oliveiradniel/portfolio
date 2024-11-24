import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import light from './assets/styles/themes/light/styles';

import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
