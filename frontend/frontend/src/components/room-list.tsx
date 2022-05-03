import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { Room } from "../utils/types";

const useStyles = makeStyles(
  (theme: { palette: { background: { paper: any } } }) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface RoomListProps {
  rooms: Room[];
  onRoomSelected: (roomId: string) => void;
}

export const RoomList: FC<RoomListProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const rooms = props.rooms;
  console.log(rooms);

  const handleListItemClick = (roomId: string) => {
    setSelectedIndex(Number(roomId));
    props.onRoomSelected(roomId);
  };

  return (
    <List
      style={{
        width: "100%",
        position: "relative",
        overflow: "auto",
        maxHeight: "90%",
      }}
    >
      <ul>
        {rooms.map((room) => (
          <ListItem
            button
            onClick={() => handleListItemClick(room.roomId)}
            selected={selectedIndex === Number(room.roomId)}
          >
            <ListItemText primary={room.location.name} />
          </ListItem>
        ))}
      </ul>
    </List>
  );
};

const RoomContainer = styled.div``;

export default RoomList;
