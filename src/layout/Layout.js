import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="WojciechSmolarek.pl" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Navbar />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
