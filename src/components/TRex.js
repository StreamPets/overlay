import { PET_HEIGHT } from "utils";

const TRex = ({ src, direction })  => {
  return (
    <img
      src={src}
      style={{
        height: PET_HEIGHT,
        width: PET_HEIGHT,
        transform: `scaleX(${direction})`
      }}
      alt="trex">
    </img>
  );
}

export default TRex;