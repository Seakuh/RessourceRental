import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useState } from "react";
import Web3 from "web3";
import "./App.css";
import { ContractABI } from "./contracts/ContractABI";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const web3: any = new Web3(
  new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
);
web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ContractABI,
  "0x531A229709047ea1F2f7ea3d8E66CEaA8D9ee011"
);

function App() {
  const [message, setMessage] = useState("");

  const setData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const accounts = await (window as any).ethereum.enable();
    const account = accounts[0];

    const gas = await RemixContract.methods.setMessage(message).estimateGas();
    const result = await RemixContract.methods
      .setMessage(message)
      .send({ from: account, gas });
    console.log(result);
  };

  const getDefaultData = async (e: any) => {
    RemixContract.methods.defaultMessage().call().then(console.log);
  };

  const getData = async (e: any) => {
    RemixContract.methods.getMessage().call().then(console.log);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={setData}>
          <label>
            Set Message:
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Message" />
        </form>
        <br />
        <button onClick={getData} type="button">
          Get Message
        </button>
        <button onClick={getDefaultData} type="button">
          Get Default Message
        </button>
      </header>
    </div>
  );
}

export default App;
