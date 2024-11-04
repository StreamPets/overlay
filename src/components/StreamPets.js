import Pet from "components/Pet";
import useViewers from "hooks/useViewers";

const StreamPets = () => {
  const { viewers } = useViewers();

  // JOIN -> add a viewer to viewers
    // Only re-render the added viewer
  // PART -> remove a viewer from viewers
    // Only re-render the removed viewer
  // COLOR -> update color of a viewer
    // Only re-render the updated viewer's <img>

  // viewers[], viewerData{}
    // StreamPets.js
    // const { viewers } = useContext(ViewerContext)
    // viewers.map(... pet ...)

    // TRex.js ({ username })
    // const { viewerData } = useContext(ViewerContext)
    // const color = viewerData[username].color

  // viewers [] -> just stores a list of usernames
  // viewerData {} -> stores viewer data for each user in viewers
  
  // useMemo(() => updateColor, [viewerData[username].color])

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