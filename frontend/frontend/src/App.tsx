import React, { FC } from "react";
import styled from "styled-components";
import RootComponent from "./components/root-component";

export const App: FC = () => {
  // const web3 = new Web3(
  //   new Web3.providers.HttpProvider("http://localhost:7545")
  // );

  // const accounts = await web3.eth.getAccounts();
  // const networkId = await web3.eth.net.getId();
  // const deployedNetwork = SimpleStorageContract.networks[networkId];

  return (
    <AppContainer className="App">
      <header className="App-header"></header>
      <RootComponent></RootComponent>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default App;
