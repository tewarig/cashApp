import './App.css'
import cashAppLogo from "./assets/logo.svg";
import eyeLogo from "./assets/eye.svg";
import cube from "./assets/cube.svg";
import cubes from "./assets/cubes.svg";
import pillar from "./assets/pillar.svg";
import stairs from "./assets/stairs.svg";
import phone from "./assets/phone.png";

function App() {
 const navBarElements = ["SignIn", "legal", "license", "security","careers","press","support","status","codeblog"];
  return (
    <div className="container">
      <div className='navBar'>
       <img src={cashAppLogo} alt="cashAppLogo"/> 
       <div className='navBar'>
      {navBarElements.map((element) => {
        return <div className='navBarElement' key={element}>{element}</div>
      })} 
       </div>
     <img src={eyeLogo} alt="eyeLogo" className='logo'/>
      </div>
      <div className='heroTextContainer'>
      <img src={phone} className='cashAppDemoPhone' alt="cashAppDemo"/>
       <div className='heroText'>
         Cash <br/> <div className='heroTextSpecific'>App</div>

       </div>
      </div>
   
      <img src={cube} alt="cube" className='cube'/>
      <img src={cubes} alt="cubes" className='cubes' />
      <img src={pillar} alt="pillar" className='pillars'/>
      <img src={stairs} alt="stairs"  className='stairs' />
    </div>
  )
}

export default App
