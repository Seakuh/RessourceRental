import React, { FC, useState } from "react";
import styled from "styled-components";
import { generateRooms } from "../mock/mockRessources";
import { Room } from "../utils/types";
import RoomList from "./room-list";

const mockRooms = generateRooms();

const filterRooms = (filterTerm: string) => {
  if (!filterTerm) {
    return mockRooms;
  }

  return mockRooms.filter((room) => room.roomId.includes(filterTerm));
};

interface RoomEntry {
  id: string;
  name: string;
}

interface RoomComponentProps {
  rooms: Room[];
  onRoomSelected: (roomId: string) => void;
}

export const RoomComponent: FC<RoomComponentProps> = (props) => {
  // const [filterTerm, setFilterTerm] = useState("");

  // const updateFilterHandler = (event: any) => {
  //   setFilterTerm(event.target.value);
  // };

  const mockRooms = generateRooms();

  return (
    <div className="App">
      <header className="App-header"></header>
      <RoomContainer>
        <RoomList
          onRoomSelected={props.onRoomSelected}
          rooms={mockRooms}
        ></RoomList>
      </RoomContainer>
    </div>
  );
};

const RoomContainer = styled.div`
  width: 700px;
  gap: 20px;
  height: 300px;
  border-style: solid;
`;

export default RoomComponent;
