import '../styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from '../getLibrary';
import type { AppProps } from 'next/app';
import { GreeterContextProvider } from '../contexts/Greeter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GreeterContextProvider>
        <Component {...pageProps} />
      </GreeterContextProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
