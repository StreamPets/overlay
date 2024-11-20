import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const fetchUsers = async (overlayID, channelID) => {
  const { data: viewers } = await api.get('/viewers', {
    params: {
      overlayID: overlayID,
      channelID: channelID
    }
  });
  return viewers;
}

export { fetchUsers };