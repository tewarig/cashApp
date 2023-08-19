import Footer from './footer';
import phone from  '../assets/phone.png';

function HeroSection() {
  return (
    <div className='heroTextContainer'>
      <img src={phone} className='cashAppDemoPhone' alt="cashAppDemo"/>
       <div className='heroText'>
         Cash <br/> <div className='heroTextSpecific'>App</div>

       </div>
       <Footer/>
      </div>
   
  )
}

export default HeroSection