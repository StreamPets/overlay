import { useEffect, useState } from "react";

const useColor = (userID, initialColor, listener) => {
  const [color, setColor] = useState(initialColor);

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