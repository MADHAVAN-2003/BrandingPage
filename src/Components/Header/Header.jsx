import '../Header/Header.css'
import RaaOnlineLogo from '../../Assets/raaonline-logo 4.png'
import phone from '../../Assets/phone.png'
import mail from '../../Assets/Mail.png'
import socialMediaIcons from '../../Assets/socialmedia-Icons.png'
function Header(){
    return(
        <div className="Header-Parent">
            <div className='RaaOnline-Logo'>
                <img src={RaaOnlineLogo} alt="" srcset="" />
            </div>

            <div className='Header-sub'>
                <div className='navbar-links'>
                    <span style={{fontSize:"12px", color:"white"}}><img src={phone} height="20px" alt="" srcset="" />&nbsp;&nbsp;+91 98847 48671 / +91 99949 94266</span>
                    <span style={{fontSize:"12px", color:"white"}}><img src={mail} alt="" srcset="" />&nbsp;&nbsp;support@raaonlinecertify.com</span>
                    <img src={socialMediaIcons} alt="" srcset="" />
                </div>

                <div className='navbar-sub'>
                    <span>HOME</span>
                    <span>ABOUT</span>
                    <span>COURSES</span>
                    <div className='navbar-btn'>
                        <button >Login</button>
                        <button>SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header