import { List, ListItemText, makeStyles, withStyles } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { Room } from "../utils/types";
import MuiListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface RoomListProps {
  rooms: Room[];
  onRoomSelected: (roomId: string) => void;
}

export const RoomList: FC<RoomListProps> = (props) => {
  const classes = useStyles();
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

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#f000b4",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#f000b4",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "#f000b4",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

const RoomContainer = styled.div``;

export default RoomList;
