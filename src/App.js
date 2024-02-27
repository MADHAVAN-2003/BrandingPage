import About from './Components/About Us/About';
import { Courses } from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Home from './Components/Home';
import Feature from './Components/OurFeature/Feature';
import WhyUs from './Components/Why Us/WhyUs';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <WhyUs/>
      <Courses/>
      <Feature/>
      <Footer/>
    </div>
    
  );
}



export default App;
