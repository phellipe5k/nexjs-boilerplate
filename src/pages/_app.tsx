import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes/default';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Phellipe5k - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default myApp;
