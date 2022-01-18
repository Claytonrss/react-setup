import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { MockServer } from './services/miragejs/MockServer';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Content from './components/organisms/content';

const environment = process.env.NODE_ENV;
if (environment !== 'production') {
  MockServer({ environment });
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Content />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
