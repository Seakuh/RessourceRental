import React, { FC, useState } from "react";
import styled from "styled-components";
import { Device } from "../utils/types";
import DeviceList from "./device-list";

interface DeviceComponentProps {
  devices: Device[] | undefined;
  onDevicesSelected: (deviceIds: string[]) => void;
}

export const DeviceComponent: FC<DeviceComponentProps> = (props) => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <DeviceContainer>
        <DeviceList
          onDevicesSelected={props.onDevicesSelected}
          devices={props.devices}
        ></DeviceList>
      </DeviceContainer>
    </div>
  );
};

const DeviceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  border-style: solid;
`;

const RootComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default DeviceComponent;
