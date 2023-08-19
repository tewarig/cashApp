import cube from "../assets/cube.svg";
import cubes from "../assets/cubes.svg";
import pillar from "../assets/pillar.svg";
import stairs from "../assets/stairs.svg";

function FloatingAssets() {
  return (
    <div>
      <img src={cube} alt="cube" className='cube'/>
      <img src={cubes} alt="cubes" className='cubes' />
      <img src={pillar} alt="pillar" className='pillars'/>
      <img src={stairs} alt="stairs"  className='stairs' />
    </div>
  )
}

export default FloatingAssets