import { useEffect, useRef, useState } from "react";
import { PET_HEIGHT } from "utils";

const useJump = (username, movingRef) => {
  const isJumping = useRef(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleJump = (event) => {
      if (event.data === username && !isJumping.current) {
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

    const eventSource = new EventSource(`${process.env.REACT_APP_API_URL}/listen`);
    eventSource.addEventListener("JUMP", handleJump);

    return () => {
      eventSource.close();
      cancelAnimationFrame(movingRef.current);
    }
  }, [username, isJumping]);

  return [height];
}

export default useJump;