import * as React from "react";

export interface AppContextInterface {
  path: string;
  setPath: (path: string) => void;
}

export const PathContext = React.createContext<AppContextInterface>({
  path: "/",
  setPath: () => {}
});
