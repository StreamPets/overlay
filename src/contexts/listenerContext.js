import { createContext } from "react"

const ListenerContext = createContext();

const ListenerProvider = ({ children }) => {
  const listener = new EventSource(`${process.env.REACT_APP_API_URL}/listen`);

  return (
    <ListenerContext.Provider value={{listener}}>
      {children}
    </ListenerContext.Provider>
  );
}

export { ListenerContext, ListenerProvider };