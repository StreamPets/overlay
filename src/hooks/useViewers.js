import { fetchUsers } from "api";
import { useEffect, useState } from "react";

const useViewers = (overlayID, channelID, listener) => {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    if (!overlayID || !channelID) {
      return;
    }
    
    const getUsers = async () => {
      const viewers = await fetchUsers(overlayID, channelID);
      console.log(viewers);
      setViewers(viewers);
    }

    getUsers();
  }, [overlayID, channelID]);

  useEffect(() => {
    if (!listener) {
      return;
    }

    listener.addEventListener("JOIN", (event) => {
      const viewerData = JSON.parse(event.data);
      setViewers(viewers => {
        if (!viewers.find(viewer => viewer.userID === viewerData.userID)) {
          return [...viewers, viewerData];
        }
        return viewers;
      });
    });

    listener.addEventListener("PART", (event) => {
      setViewers(viewers => viewers.filter(viewer => viewer.userID !== event.data));
    });
  }, [listener])

  return { viewers };
}

export default useViewers;