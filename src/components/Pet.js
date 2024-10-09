import blueRex from 'assets/blue-rex.png';
import blackRex from 'assets/black-rex.png';
import purpleRex from 'assets/purple-rex.png';
import orangeRex from 'assets/orange-rex.png';
import greenRex from 'assets/green-rex.png';

import { getRandomInt, PET_HEIGHT, SCREEN_WIDTH } from "utils";
import useJump from "hooks/useJump";
import useMove from "hooks/useMove";
import TRex from './TRex';

const Pet = ({ username }) => {
  const startingPosition = getRandomInt(SCREEN_WIDTH - PET_HEIGHT);

  const [position, movingRef, direction] = useMove(startingPosition);
  const [height] = useJump(username, movingRef);

  let src = greenRex;
  if (username === 'ljrexcodes') {
    src = blueRex;
  }
  if (username === 'rj2savage') {
    src = blackRex;
  }
  if (username === 'rarenathan1206') {
    src = purpleRex;
  }
  if (username === 'klaudia0_o') {
    src = orangeRex;
  }

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
      <TRex src={src} direction={direction} />
    </div>
  );
}

export default Pet;