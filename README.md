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
5. In Metamask, import account. Use the private key string of the first account (index 0). (Select this imported account, as it will be the owner of the smart contract)
6. Set the `PRIVATE_KEY` in the .env file (create .env file under the project directory).
    ```
    PRIVATE_KEY=0123...
    ```

7. In a new terminal, deploy the smart contract `npx hardhat run scripts/deploy.ts --network localhost`. Take note of the smart contract address.
8. Configure `PRIVATE_KEY` and `NEXT_PUBLIC_CONTRACT_ADDR` in a new .env file (Create this .env file in the `client` directory. Yes there are two .env files). 
    ```
    PRIVATE_KEY=0123...
    NEXT_PUBLIC_CONTRACT_ADDR=0x5f...
    ```
9. In another new terminal, change into the `client` directory, and install: `npm install`. Then run: `npm run dev`
10. Open a new browsert tab or window. Key in url http://localhost:3000
11. Log into the metamask and refresh the browser page if necessary.

If you encountered "Invalid smart contract" error, make sure you "connect" the account in the Metamask. Then reset account in the Metamask (Settings > Advanced > Reset [Account](Account))
