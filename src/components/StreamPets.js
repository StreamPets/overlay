import Pet from "components/Pet";
import useViewers from "hooks/useViewers";
import { useEffect, useState } from "react";

const StreamPets = () => {
  const [overlayID, setOverlayID] = useState(null);
  const [channelID, setChannelID] = useState(null);
  const [listener, setListener] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const overlayID = urlParams.get('overlayID');
    setOverlayID(overlayID);

    const channelID = urlParams.get('channelID');
    setChannelID(channelID);

    const listener = new EventSource(`${process.env.REACT_APP_API_URL}/listen?overlayID=${overlayID}&channelID=${channelID}`);
    setListener(listener);
  }, [])

  const { viewers } = useViewers(overlayID, channelID, listener);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      {viewers.map(viewer => {
        return <Pet key={viewer.username} viewer={viewer} listener={listener} />
      })}
    </div>
  );
}

export default StreamPets;