import Pet from "components/Pet";
import useViewers from "hooks/useViewers";

const StreamPets = () => {
  const { viewers } = useViewers();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      {viewers.map(viewer =>
        <Pet key={viewer.username} username={viewer.username} color={viewer.color} />
      )}
    </div>
  );
}

export default StreamPets;