import cashAppLogo from "../assets/logo.svg";
import eyeLogo from "../assets/eye.svg";

function NavBar() {
    const navBarElements = ["Sign In", "legal", "license", "security","careers","press","support","status","codeblog"];
  return (
    <div>
     <div className='navBar'>
       <img src={cashAppLogo} alt="cashAppLogo"/> 
       <div className='navBar'>
      {navBarElements.map((element) => {
        return <div className='navBarElement' key={element}>{element}</div>
      })} 
       </div>
     <img src={eyeLogo} alt="eyeLogo" className='logo'/>
      </div>
    </div>
  )
}

export default NavBar