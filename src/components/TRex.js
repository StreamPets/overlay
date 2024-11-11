import { PET_HEIGHT } from "utils";
import useColor from 'hooks/useColor';

const TRex = ({ userID, initialColor, direction })  => {
  const { color } = useColor(userID, initialColor);

  return (
    <img
      src={color.img}
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