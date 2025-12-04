import { type PropsWithChildren, useEffect } from "react";
import { socketClientService } from "../services/SocketClientService";

export function SocketProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    socketClientService.connect();
  }, []);

  return children;
}
