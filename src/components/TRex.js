import blueRex from 'assets/blue-rex.png';
import blackRex from 'assets/black-rex.png';
import purpleRex from 'assets/purple-rex.png';
import orangeRex from 'assets/orange-rex.png';
import greenRex from 'assets/green-rex.png';
import redRex from 'assets/red-rex.png';

import { PET_HEIGHT } from "utils";

const images = {
  blue: blueRex,
  black: blackRex,
  purple: purpleRex,
  orange: orangeRex,
  green: greenRex,
  red: redRex,
}

const TRex = ({ color, direction })  => {
  return (
    <img
      src={images[color]}
      style={{
        height: PET_HEIGHT,
        width: PET_HEIGHT,
        transform: `scaleX(${direction})`,
        color: 'red',
      }}
      alt="trex">
    </img>
  );
}

export default TRex;