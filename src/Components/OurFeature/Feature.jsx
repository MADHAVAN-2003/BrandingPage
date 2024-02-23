import './Feature.css'
import arrow from '../../Assets/UpArrow.png'
function Feature(){
    return(
        <div className="feature-container"> 
            <h2 style={{ textAlign: "center", fontFamily: "Roboto", color: "#00468D",  textDecoration:"underline"}} >Our Features</h2> <br />
            <div className='feature-card'>
                <div className="mcq-cards cards">
                    <h5 style={{textAlign:"center", color:"#00468D",marginTop:"25%"}}>MCQ</h5>
                    <p style={{color:"black", color:"#00468D",marginLeft:"10px",marginRight:"10px",marginTop:"15px", fontFamily:"Roboto" , fontWeight:"600", fontSize:"11px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus vero perferendis consequatur id dicta cumque quo .</p>
                    <button className='feature-btn'><img src={arrow} alt="" srcset="" /></button>
                </div>
                <div className="videolecture-cards cards" >
                    <h5 style={{textAlign:"center", color:"#00468D",marginTop:"25%"}}>VIDEO LECTURES</h5>
                    <p style={{color:"black", color:"#00468D",marginLeft:"10px",marginRight:"10px",marginTop:"15px", fontFamily:"Roboto" , fontWeight:"600", fontSize:"11px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus vero perferendis consequatur id dicta cumque quo .</p>
                    <button className='feature-btn'><img src={arrow} alt="" srcset="" /></button>
                </div>
                <div className="slides-cards cards">
                    <h5 style={{textAlign:"center", color:"#00468D",marginTop:"25%"}}>SLIDES</h5>
                    <p style={{color:"black", color:"#00468D",marginLeft:"10px",marginRight:"10px",marginTop:"15px", fontFamily:"Roboto" , fontWeight:"600", fontSize:"11px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus vero perferendis consequatur id dicta cumque quo .</p>
                    <button className='feature-btn'><img src={arrow} alt="" srcset="" /></button>
                </div>
                <div className="ebooks-cards cards">
                    <h5 style={{textAlign:"center", color:"#00468D",marginTop:"25%"}}>E-BOOKS</h5>
                    <p style={{color:"black", color:"#00468D",marginLeft:"10px",marginRight:"10px",marginTop:"15px", fontFamily:"Roboto" , fontWeight:"600", fontSize:"11px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus vero perferendis consequatur id dicta cumque quo .</p>
                    <button className='feature-btn'><img src={arrow} alt="" srcset="" /></button>
                </div>
            </div>
        </div>
    );
}
export default Feature