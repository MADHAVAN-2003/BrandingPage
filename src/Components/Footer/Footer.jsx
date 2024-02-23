import './Footer.css'
import upreactangle from '../../Assets/upRectangle.png'
import RaaonlineLogo from '../../Assets/raaonline-logo 4.png'
import phone from '../../Assets/phone.png'
import mail from '../../Assets/Mail.png'
import socialMediaIcons from '../../Assets/socialmedia-Icons.png'
import applestore from '../../Assets/Apple Store.png'
import playstore from '../../Assets/Play Store.png';

function Footer(){
 return(
    <div className='footer-container'>
        <img src={upreactangle} alt=""  height="40px" style={{float:"right"}} />
       <div className="footer-content">
            <div className="footer-card">
                <img src={RaaonlineLogo} alt="" height="60px" width="150px" />
                <h5 style={{marginLeft:"30px"}}>Premium Medical <br />E-learning Platform</h5>
            </div>
            <div className="footer-card">
                <h5>CONTACT</h5>
                <br />
                <span><img src={phone} alt="" /><span>&ensp;+91 98847 48671  / +91 99949 94266</span></span><br />
                <span><img src={mail} alt="" /><span>&ensp;support@raaonlinecertify.com</span></span>
            </div>
            <div className="footer-card">
                <h5>OUR SOCIALS</h5><br />
                <img src={socialMediaIcons} height="20px" width="180px" srcset="" alt=''/><br />
                <span><img src={applestore} alt="" height="40px" srcset="" />&nbsp;<img src={playstore} height="40px" alt=''></img></span>
            </div>
       </div>      
    </div>
 );
}
export default Footer