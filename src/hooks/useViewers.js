import axios from "axios";
import useEventSource from "./useEventSource";
import { useEffect, useState } from "react";

const useViewers = () => {
  const [viewers, setViewers] = useState([]);

  const api = axios.create({
    baseURL: 'http://localhost:5000'
  });

  useEventSource("http://localhost:5000/listen", "JOIN", (event) => {
    if (!viewers.find(user => user === event.data)) {
      setViewers(prev => [...prev, event.data])
    }
  });

  useEventSource("http://localhost:5000/listen", "PART", (event) => {
    setViewers(prev => prev.filter(user => user !== event.data));
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: viewers } = await api.get('/viewers');
      setViewers(viewers);
    }

    fetchUsers();
  }, []);

  return viewers;
}

export default useViewers;