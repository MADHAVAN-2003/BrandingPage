import './About.css'
import AboutImg from '../../Assets/About-img.png'
function About(){
    return(
        <div className="about-container">
            <div className="about-content">
                <h2 style={{ textAlign: "center", fontFamily: "Roboto", color: "#00468D",  textDecoration:"underline"}} >About Us</h2> <br />
                <h2 style={{color : "#55ACEE"}}>RaaOnline is an<span style={{color:"#00468D"}}>&nbsp;Premium&nbsp;<span style={{color:"#0AC581"}}>Medical</span> </span></h2>
                <h2 style={{color : "#55ACEE"}}>E-learning platform  </h2><br />
                <p style={{fontSize:"12px", fontFamily:"Manrope"}}>Raaonline is an E-learning website on important medical specialities providing critical and timely reinforcement to practicing professionals as well as students who have a periodic need for additional support in academics as well as practical-experience based guidance on day-to-day clinics and cases.</p><br />
                <h3 style={{color:"#00468D"}} >Categories we provided</h3>
                <div className='checkbox-cate'>
                <div className="row">
                    <div className="col">
                        <input type="checkbox" /> General Medicine
                    </div>
                    <div className="col">
                        <input type="checkbox" /> Surgery
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="checkbox" /> Obstetrics & Gynecology
                    </div>
                    <div className="col">
                        <input type="checkbox" /> Cardiology
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="checkbox" /> Dental
                    </div>
                    <div className="col">
                        <input type="checkbox" /> Videos & Animations
                    </div>
                </div>
            </div>

            </div>
            <div className="about-image">
                <img src={AboutImg} width="100%" style={{marginTop:"80px"}} alt="" srcset="" />
            </div>
        </div>
    );
}
export default About