import axios from "axios";
import { ListenerContext } from "contexts/listenerContext";
import { useContext, useEffect, useState } from "react";

const useViewers = () => {
  const [viewers, setViewers] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  const { listener } = useContext(ListenerContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: viewers } = await api.get('/viewers');
      setViewers(viewers);
    }

    fetchUsers();

    listener.addEventListener("JOIN", (event) => {
      const viewerData = JSON.parse(event.data);
      setViewers(viewers => {
        if (!viewers.find(viewer => viewer.username === viewerData.username)) {
          return [...viewers, viewerData];
        }
        return viewers;
      });
    });

    listener.addEventListener("PART", (event) => {
      setViewers(viewers => viewers.filter(viewer => viewer.username !== event.data));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { viewers };
}

export default useViewers;