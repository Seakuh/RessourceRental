import React, { FC, useState } from "react";
import styled from "styled-components";

interface RoomDetailComponentProps {}

export const RoomDetailComponent: FC<RoomDetailComponentProps> = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <header className="App-header"></header>
      <RoomDetailContainer></RoomDetailContainer>
    </div>
  );
};

const RoomDetailContainer = styled.div`
  width: 1300px;
  gap: 20px;
  height: 300px;
  border-style: solid;
  align: center;
`;

export default RoomDetailComponent;
