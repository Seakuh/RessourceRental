import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  // const web3 = new Web3(
  //   new Web3.providers.HttpProvider("http://localhost:7545")
  // );
  // //
  // const accounts = await web3.eth.getAccounts();
  // const networkId = await web3.eth.net.getId();
  // const deployedNetwork = SimpleStorageContract.networks[networkId];
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
