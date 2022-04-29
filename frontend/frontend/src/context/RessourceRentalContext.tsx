import { createContext, FC, useContext, useEffect, useState } from "react";
import { Room } from "../utils/types";

interface RessourceRentalContextValue {
  isConfigModeEnabled: boolean;
  //   getSelectedRoom: Room;
}

export const RessourceRentalContext =
  createContext<RessourceRentalContextValue>({
    isConfigModeEnabled: false,
    // getSelectedRoom: () => void;
    // getSelectedRoom: {};
  });
