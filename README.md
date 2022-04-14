# Nextjs-DApp

A bare bone decentralized app based on Next.js and Hardhat project.

The Next.js based frontend can interacts with the Greeter.sol, a sample smart contract in the Harhdhat project.

## [Requirements](Requirements)

-   Installed metamask extension in a Chrome browser

## [Usage](Usage)

1. Clone this repo and change into the directory.
2. Install `npm install`
3. Start a local blockchain node `npx hardhat node`.
4. In Metamask, create a new network:
    1. New RPC Url = http://127.0.0.1:8545
    2. Chain ID = 31337l
5. In Metamask, import account. Use the private key string of the first account (index 0).
6. In a new terminal, deploy the smart contract `npx hardhat run scripts/deploy.ts`
7. Configure `PRIVATE_KEY` and `CONTRACT_ADDR` in the env file (in the `client` directory). (you can get the private key of the first account when you started the local blockchain node and the smart contract address when the smart contract is deployed)
8. In another new terminal, change into the `client` directory, and run: `npm run dev`
9. Open a new browsert tab or window. Key in url http://localhost:3000
10. Log into the metamask and refresh the browser page if necessary.
