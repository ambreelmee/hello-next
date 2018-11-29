import { ResponsiveBubble } from '@nivo/circle-packing'

const Bubble = (props) => {
  return (
    <ResponsiveBubble
      root={{
        "id": "base",
        "children": [
          {
            "id": props.name,
            "loc": props.loc,
            "color": "#ffd100",
          },
          {
            "id": "null",
            "loc": 100,
            "color": "white",
          }
          ]
      }}
      margin={{
          "top": 20,
          "right": 0,
          "bottom": 20,
          "left":   0
      }}
      identity="id"
      value="loc"
      colorBy={node => node.color}
      enableLabel={true}
      isInteractive={true}
      isZoomable={false}
      padding={15}
      leavesOnly={true}
      label={node => (node.id !== "null" ? node.value : '')}
      labelTextColor="inherit:darker(1)"
      borderWidth={2}
      animate={true}
      motionStiffness={90}
      motionDamping={12}
      tooltip={node => <span>{node.id !== "null" ? `${node.id}: ${node.value}` : ''}</span>}
  />)
}


const horizontalBubbles = () => (
  <div style={{height: "300px", display: "flex"}}>
    <div style={{width: "200px"}}>
      <Bubble name="Biologie, médecine et santé" loc={423} />
    </div>
    <div style={{width: "200px"}}>
      <Bubble name="Sciences de la société" loc={119} />
    </div>
    <div style={{width: "200px"}}>
      <Bubble name="Sciences humaines" loc={43} />
    </div>
    <div style={{width: "200px"}}>
      <Bubble name="Sciences de l'ingénieur" loc={38} />
    </div>
  </div>);


export default horizontalBubbles;
