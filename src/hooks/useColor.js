import { ListenerContext } from "contexts/listenerContext";
import { useContext, useEffect, useState } from "react";

const useColor = (userID, initialColor) => {
  const [color, setColor] = useState(initialColor);
  const { listener } = useContext(ListenerContext);

  useEffect(() => {
    const changeColor = (event) => {
      const color = JSON.parse(event.data);
      setColor(color);
    }

    listener.addEventListener(`COLOR-${userID}`, changeColor);
  }, [userID, listener]);

  return { color };
}

export default useColor;