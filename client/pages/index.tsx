import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useWeb3React } from '@web3-react/core';
import useEagerConnect from '../hooks/ethereum/useEagerConnect';
import { useGreeterContext } from '../contexts/Greeter';
import Account from '../components/ethereum/Account';

import styles from '../styles/Home.module.css';
import Greeter from '../components/greeter/Greeter';

const Home: NextPage = () => {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === 'string' && !!library;

  const { smartContractAddress, isContractValid, greet, setGreeting } =
    useGreeterContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js and Hardhat</title>
        <meta name="description" content="Next.js and Hardhat DApp project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Account triedToEagerConnect={triedToEagerConnect} />
        <Greeter
          smartContractAddress={smartContractAddress}
          greet={greet}
          isContractValid={isContractValid}
          setGreeting={setGreeting}
        />
      </main>
    </div>
  );
};

export default Home;
