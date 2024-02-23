import './WhyUs.css'
import WhyUsImg from '../../Assets/WhyUs Img.png'
import one from '../../Assets/1.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'

function WhyUs(){
    return(
        <div className="whyUs-container">
            <div className="whyUs-img">
                <img src={WhyUsImg} alt="" height="400px" srcset="" />
            </div>
            <div className="WhyUs-Content">
                <h2 style={{ textAlign: "center", fontFamily: "Roboto", color: "#00468D",  textDecoration:"underline"}} >Why Us</h2> <br />
                <h2 style={{color : "#55ACEE"}}>We are<span style={{color:"#00468D"}}>&nbsp;Ready To Help with &nbsp;<span style={{color:"#0AC581"}}>Premium</span> </span></h2>
                <h2 style={{color : "#55ACEE"}}>Medical learning content</h2><br />
                <div className='whyUs-box'>
                    <div className="img-header">
                        <img src={one}  width="40px" height="35px" alt="" srcset="" />
                        <h3>Comprehensive Medical Education</h3>
                    </div>
                    <div className="whyUs-Lorem">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <br />

                    <div className="img-header">
                        <img src={two}  width="40px" height="35px" alt="" srcset="" />
                        <h3>Learn From The Experts</h3>
                    </div>
                    <div className="whyUs-Lorem">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <br />

                    <div className="img-header">
                        <img src={three}  width="40px" height="35px" alt="" srcset="" />
                        <h3>200+ Exam Related Rapid Revision Topics</h3>
                    </div>
                    <div className="whyUs-Lorem">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
export default WhyUs