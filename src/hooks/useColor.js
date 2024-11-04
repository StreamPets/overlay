import { ListenerContext } from "contexts/listenerContext";
import { useContext, useEffect, useState } from "react";

const useColor = (username, initialColor) => {
  const [color, setColor] = useState(initialColor);
  const { listener } = useContext(ListenerContext);

  useEffect(() => {
    const changeColor = (event) => {
      const viewer = JSON.parse(event.data);
      setColor(viewer.color);
    }

    listener.addEventListener(`COLOR-${username}`, changeColor);
  }, [username, listener]);

  return { color };
}

export default useColor;