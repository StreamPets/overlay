import blueRex from 'assets/blue-rex.png';
import blackRex from 'assets/black-rex.png';
import purpleRex from 'assets/purple-rex.png';
import orangeRex from 'assets/orange-rex.png';
import greenRex from 'assets/green-rex.png';
import redRex from 'assets/red-rex.png';
import pinkRex from 'assets/pink-rex.png';

import { PET_HEIGHT } from "utils";
import useColor from 'hooks/useColor';

const images = {
  blue: blueRex,
  black: blackRex,
  purple: purpleRex,
  orange: orangeRex,
  green: greenRex,
  red: redRex,
  pink: pinkRex,
}

const TRex = ({ userID, initialColor, direction })  => {
  const { color } = useColor(userID, initialColor);

  return (
    <img
      src={images[color]}
      style={{
        height: PET_HEIGHT,
        width: PET_HEIGHT,
        transform: `scaleX(${direction})`,
      }}
      alt="trex">
    </img>
  );
}

export default TRex;