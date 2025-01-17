import { useEffect, useState } from "react";

const useColor = (userId, initialColor, listener) => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const changeColor = (event) => {
      const color = event.data;
      setColor(color);
    }

    listener.addEventListener(`COLOR-${userId}`, changeColor);
  }, [userId, listener]);

  return { color };
}

export default useColor;