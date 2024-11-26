import { useEffect, useRef, useState } from "react";
import { PET_HEIGHT } from "utils";

const useJump = (userID, movingRef, listener) => {
  const isJumping = useRef(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleJump = (event) => {
      if (!isJumping.current) {
        isJumping.current = true;
        cancelAnimationFrame(movingRef.current);
        const startTime = Date.now()
        const duration = 2000;
        
        const animate = () => {
          const elapsedTime = Date.now() - startTime;
          const radians = (elapsedTime / duration) * Math.PI;

          const height = Math.sin(radians) * PET_HEIGHT * 2;
          setHeight(height);

          if (elapsedTime < duration) {
            requestAnimationFrame(animate);
          } else {
            setHeight(0);
            isJumping.current = false;
          }
        }

        requestAnimationFrame(animate);
      }
    }

    listener.addEventListener(`JUMP-${userID}`, handleJump);

    // eslint-disable-next-line
    return () => cancelAnimationFrame(movingRef.current);
  // eslint-disable-next-line
  }, [userID, isJumping, listener]);

  return [height];
}

export default useJump;