import { useEffect, useRef, useState } from "react";
import { getRandomInt, PET_HEIGHT, PET_SPEED, SCREEN_WIDTH } from "utils";

const useMove = (startingPosition) => {
  const [position, setPosition] = useState(startingPosition);
  const delay = getRandomInt(2000) - 1000;
  const movingRef = useRef(null);

  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleMove = (distance, direction) => {
      const startTime = Date.now();
      const initialPosition = position;

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const distanceMoved = elapsedTime * PET_SPEED;

        let newPosition = initialPosition + distanceMoved * direction;

        if (newPosition < 0) {
          newPosition = -newPosition;
          setDirection(1);
        }
        if (newPosition > SCREEN_WIDTH - PET_HEIGHT) {
          newPosition = 2 * (SCREEN_WIDTH - PET_HEIGHT) - newPosition;
          setDirection(-1);
        }
        setPosition(newPosition);

        if (distanceMoved < distance) {
          movingRef.current = requestAnimationFrame(animate);
        }
      }

      movingRef.current = requestAnimationFrame(animate);
    }

    const interval = setInterval(() => {
      if (Math.random() < 0.5) {
        const distance = getRandomInt(SCREEN_WIDTH - PET_HEIGHT);
        const newDirection = getRandomInt(1) * 2 - 1;
        setDirection(newDirection);
        handleMove(distance, newDirection);
      }
    }, 5000 + delay);

    const currentMovingRef = movingRef.current;

    return () => {
      clearInterval(interval);
      if (currentMovingRef) {
        cancelAnimationFrame(currentMovingRef);
      }
    };
  }, [delay, position]);

  return [position, movingRef, direction];
}

export default useMove;