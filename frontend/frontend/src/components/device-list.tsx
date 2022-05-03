import { List, ListItem, ListItemText } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import React, { FC } from "react";
import styled from "styled-components";
import { Device } from "../utils/types";

interface DeviceListProps {
  devices: Device[] | undefined;
  onDevicesSelected: (deviceIds: string[]) => void;
}

export const DeviceList: FC<DeviceListProps> = (props) => {
  const mockDevices = props.devices;
  console.log(mockDevices);

  const handleDeviceChecked = (deviceId: number) => {};

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
        {mockDevices?.map((device) => (
          <ListItem button>
            <Checkbox edge="start" tabIndex={-1} disableRipple />

            <ListItemText primary={device.deviceName} />
          </ListItem>
        ))}
      </ul>
    </List>
  );
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const ListItem = withStyles({
//   root: {
//     "&$selected": {
//       backgroundColor: "red",
//       color: "white",
//       "& .MuiListItemIcon-root": {
//         color: "white",
//       },
//     },
//     "&$selected:hover": {
//       backgroundColor: "purple",
//       color: "white",
//       "& .MuiListItemIcon-root": {
//         color: "white",
//       },
//     },
//     "&:hover": {
//       backgroundColor: "blue",
//       color: "white",
//       "& .MuiListItemIcon-root": {
//         color: "white",
//       },
//     },
//   },
//   selected: {},
// })(MuiListItem);

const RoomContainer = styled.div``;

export default DeviceList;
