import { PET_HEIGHT } from "utils";
import useColor from 'hooks/useColor';

const TRex = ({ userId, initialColor, direction, listener })  => {
  const { color } = useColor(userId, initialColor, listener);

  return (
    <img
      src={color}
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