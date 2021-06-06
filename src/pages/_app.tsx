/* eslint-disable react-hooks/rules-of-hooks */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from 'styles/global';
import { useRouter } from 'next/router';

const myApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};

export default myApp;
