import { Button, Stack } from "@material-ui/core";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { generateRooms } from "../mock/mockRessources";
import { Device, Room } from "../utils/types";
import CalendarComponent from "./calender-component";
import DeviceComponent from "./device-component";
import RoomComponent from "./room-component";
import RoomDetailComponent from "./room-detail-component";
// 528-577
export const RootComponent: FC = () => {
  const generatedRooms = generateRooms();

  const [rooms, setRooms] = useState<Room[]>(generatedRooms);
  const [devices, setDevices] = useState<Device[] | undefined>(
    generatedRooms.at(0)?.devices
  );

  const onDevicesChanged = (deviceIds: string[]) => {};

  const onRoomChanged = (roomId: string) => {
    console.log(roomId);
    const selectedRoom = rooms.find((room) => room.roomId === roomId);
    console.log(selectedRoom?.devices);
    setDevices(selectedRoom?.devices);
  };

  const searchRessource = (seachTerm: string) => {
    console.log("Search: " + seachTerm);
  };

  return (
    <RootComponentContainer className="RootComponent">
      <header className="RootComponent-header"></header>
      {/* <SeachRessourceBar searchRessource={searchRessource}></SeachRessourceBar> */}
      <SelectionContainer>
        <RoomComponent
          rooms={rooms}
          onRoomSelected={onRoomChanged}
        ></RoomComponent>
        <DeviceComponent
          devices={devices}
          onDevicesSelected={onDevicesChanged}
        ></DeviceComponent>
        <CalendarComponent></CalendarComponent>
      </SelectionContainer>
      <SelectionContainer>
        <RoomDetailComponent></RoomDetailComponent>
        <Stack width={"1000px"} spacing={10} direction="column">
          <Button color="primary" variant="contained">
            Book
          </Button>
          <Button color="primary" variant="contained">
            Rent Device
          </Button>
        </Stack>
      </SelectionContainer>
    </RootComponentContainer>
  );
};
const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
const RootComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default RootComponent;
