import axios from "axios";
import { useEffect, useState } from "react";

const useViewers = () => {
  const [viewers, setViewers] = useState([]);

  const api = axios.create({
    baseURL: 'http://localhost:5000'
  });

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/listen");

    const fetchUsers = async () => {
      const { data: viewers } = await api.get('/viewers');
      setViewers(viewers);
    }

    fetchUsers();

    eventSource.addEventListener("JOIN", (event) => {
      const viewer = JSON.parse(event.data);
      setViewers(prev => {
        if (!prev.find(user => user.username === viewer.username)) {
          return [...prev, viewer];
        }
        return prev;
      });
    });

    eventSource.addEventListener("PART", (event) => {
      setViewers(prev => prev.filter(user => user.username !== event.data));
    });

    eventSource.addEventListener("COLOR", (event) => {
      console.log(event.data);
      const viewer = JSON.parse(event.data);
      setViewers(prev => prev.map(item => {
        if (item.username === viewer.username) {
          return { username: viewer.username, color: viewer.color };
        }
        return item;
      }));
    });

    return () => eventSource.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewers;
}

export default useViewers;