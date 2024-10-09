import Pet from "components/Pet";
import useViewers from "hooks/useViewers";

const StreamPets = () => {
  const viewers = useViewers();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      {viewers.map(username =>
        <Pet username={username} />
      )}
    </div>
  );
}

export default StreamPets;