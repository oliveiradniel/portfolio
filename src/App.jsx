import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import light from './assets/styles/themes/light/styles';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
}

export default App;
