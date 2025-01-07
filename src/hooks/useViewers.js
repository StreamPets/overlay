import { useEffect, useState } from "react";

const useViewers = (listener) => {
  const [viewers, setViewers] = useState([]);

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