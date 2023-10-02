import { useEffect, useState } from "react";
import Sockette from "sockette";
import useAuth from "context/useAuth";
import { SOCKET_API } from "src/utils/consts";
import { Notification } from "components/Notificaiton/Interface";

function useSocket() {
  const { user } = useAuth();
  const [source, setSource] = useState<Notification | undefined>(undefined);
  const [status, setStatus] = useState<number>(0);
  const [socket, setWS] = useState<Object>({ connected: false });
  const [connected, setConnected] = useState<boolean>(false);

  const onConnect = (e: any) => {
    if (e.type === "open") {
      setStatus(1);
    }
  };

  const onClose = (e: any) => {
    if (e?.currentTarget) {
      e.currentTarget.onmessage((a: any) => {
        console.log(a);
      });
    }
    if (e.type === "open") {
      setStatus(1);
      setConnected(true);
    }
  };

  const onMessageReceive = (e: any) => {
    const data = JSON.parse(e.data);
    setSource(data);
  };

  useEffect(() => {
    if (user?.id) {
      new Sockette(`${SOCKET_API}/?userId=${user?.id}`, {
        timeout: 5e3,
        maxAttempts: 3,
        onopen: onConnect,
        onmessage: onMessageReceive,
        onclose: () => onClose,
        onerror: (error) => {
          console.log("error ", error);
          setStatus(2);
          setConnected(false);
        },
      });
    }
  }, [user]);

  return { socket, connected, source };
}

export default useSocket;
