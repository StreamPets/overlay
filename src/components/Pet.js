import { getRandomInt, PET_HEIGHT, SCREEN_WIDTH } from "utils";
import useJump from "hooks/useJump";
import useMove from "hooks/useMove";
import TRex from './TRex';

const Pet = ({ viewer: { userId, username, color }, listener}) => {
  const startingPosition = getRandomInt(SCREEN_WIDTH - PET_HEIGHT);

  const [position, movingRef, direction] = useMove(startingPosition);
  const [height] = useJump(userId, movingRef, listener);

  return (
    <div style={{
      position: "absolute",
      bottom: height,
      left: position,
    }}>
      <p style={{
        fontWeight: "bolder",
        textShadow: [
          "3px 3px 0px #000",
          "-3px 3px 0px #000",
          "3px -3px 0px #000",
          "-3px -3px 0px #000"
        ],
      }}>
        {username}
      </p>
      <TRex userId={userId} initialColor={color} direction={direction} listener={listener} />
    </div>
  );
}

export default Pet;