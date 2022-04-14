import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers, Contract } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json';

type Props = {
  children: React.ReactNode;
};
export type GreeterContext = {
  smartContractAddress: string;
  isContractValid: boolean;
  greet: string;
  setGreeting: (newGreeting: string) => void;
};

const GreeterContext = createContext<GreeterContext | null>(null);

export const GreeterContextProvider = ({ children }: Props) => {
  const [smartContractAddress, setSmartContractAddress] = React.useState('');
  const [greet, setGreet] = useState('');
  const [contract, setContract] = useState<Contract>();
  const [isContractValid, setIsContractValid] = React.useState(false);

  const { library, account } = useWeb3React<Web3Provider>();

  useEffect(() => {
    const contractAddress = `${process.env.NEXT_PUBLIC_CONTRACT_ADDR}`;
    const contract = new ethers.Contract(contractAddress, Greeter.abi, library);
    setContract(contract);
    setSmartContractAddress(contractAddress);
    checkContractValidity();
  }, [library]);

  const checkContractValidity = async () => {
    if (!contract) return false;
    try {
      const contractAddress = `${process.env.NEXT_PUBLIC_CONTRACT_ADDR}`;
      const contract = new ethers.Contract(
        contractAddress,
        Greeter.abi,
        library,
      );
      await contract.greet();
      setIsContractValid(true);
    } catch (error) {
      setIsContractValid(false);
    }
  };

  const setGreeting = async (newGreeting: string) => {
    // console.log(newGreeting);
    if (!contract) {
      console.log('No contract');
      return;
    }
    const signer = library?.getSigner();
    if (!signer) {
      console.log('No Signer');
      return;
    }

    const tx = await contract.connect(signer).setGreeting(newGreeting);
    const receipt = await tx.wait();
    console.log(receipt);

    const g = await contract.greet();
    setGreet(g);
  };

  return (
    <GreeterContext.Provider
      value={{ smartContractAddress, isContractValid, greet, setGreeting }}
    >
      {children}
    </GreeterContext.Provider>
  );
};

export const useGreeterContext = () => {
  const context = useContext(GreeterContext);

  if (!context)
    throw new Error(
      'GreeterContext must be called from within the GreeterContextProvider',
    );

  return context;
};
