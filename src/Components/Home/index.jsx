import React from "react";
import './Home.css'
import Reactangle from "../../Assets/rectangle-right.png";
import Arrow from '../../Assets/Arrow forward.png'
import Applestore from '../../Assets/Apple Store.png'
import Playstore from '../../Assets/Play Store.png'


function Home() {
  return (
    <div className="Home-Parent">
        <img src={Reactangle} alt="" srcset="" height="50px" style={{float:"left" , marginTop : "-5px"}} /><br /><br /><br />
        <h1>Online Medical Platforms Empower Professionals with </h1>
        <h1>Accessible, Continuous Education Resources </h1><br />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore etdolore magna <br /> aliquyam erat, sediam voluptua. At veroeos et accusam et justo duo dolores et ea rebum. Stetclita kasd gubergren, no sea </p><br /><br />
        <button>Explore <img src={Arrow} alt="" srcset=""  height="20px" /></button><br /><br /><br />
        <div className="banner-text">
          <span style={{color:"#00468D"}}>Download</span>&nbsp;<span style={{color:"#55ACEE"}}>RAA</span><span  style={{color:"brown"}}>ONLINE</span>&nbsp;<span style={{color:"#00468D"}}>APP:</span>&nbsp;
          <img src={Applestore} alt="" srcset=""  height="45px"/>&nbsp;&nbsp;
          <img src={Playstore} alt="" srcset=""  height="45px" />
        </div>
    </div>
  );
}

export default Home;
