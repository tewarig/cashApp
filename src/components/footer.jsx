import appleLogo from "../assets/socials/appleStore.svg";
import playStoreLogo from "../assets/socials/playStore.svg";
import downArrow from "../assets/socials/downArrow.svg";
import twitch from "../assets/socials/twitch.svg";
import twitter from "../assets/socials/twitter.svg";
import instragram from "../assets/socials/instagram.svg";


function Footer() {
  return (
    <div className='footer'>
    <div className='storeLink'>
     <button className="appStoreButtons"> 
        <img src={appleLogo} alt="appleLogo" className='appleLogo' />
        App Store </button>
     <button className="appStoreButtons">
        <img src={playStoreLogo} alt="appleLogo" className='appleLogo' />
       Google Play
        </button>
    </div>
    <div className='downLoadIcons'>
     <img src={downArrow} alt="downArrow" className='downArrow' />
     </div>
    <div className='termsAndConditions'>
    Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
    </div>
    <div className='socialIcons'>
     <img src={twitch} alt="twitch" className='socialIcon' />
     <img src={twitter} alt="twitter" className='socialIcon' />
     <img src={instragram} alt="instragram" className='socialIcon' />
    </div>
  </div>
  )
}

export default Footer