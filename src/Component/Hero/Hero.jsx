import "./Hero.css";
import bc from "../../assets/img/hero-dark.png";
import bcdark from "../../assets/img/hero-light.png";
import lab from "../../assets/img/LABNEW.png";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";
import Slider from "../Slider/Slider";



const Hero = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div style={{ backgroundColor: theme.backgroundImage, color: theme.color }}>
      <div
        className="hero"
        id="Hero"
         style={
           isDark
             ? { backgroundImage: `url(${bc})` }
             : { backgroundImage: `url(${bcdark})` }
        }
      >
        <div className={isDark?"text-hero":"text-hero line-color"} >
          <h2  className="hello">Hello,my name is <span>Nour Alhouda</span></h2>
            <h5 className="tayping"> <span>Front-end Developer & UI/UX Designer</span></h5> 
     
           <h4>If you have any ideas or questions about your project.<br/>I'm here to help!</h4>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=15GvceUa-TMMjITPwwnEbDPKa4PsB4lXC&export=download"
            download="Nour Alhouda kattan CV's"
          >
            <button
              style={{
                backgroundColor: theme.backgroundImage,
                color: theme.color,
              }}
            >
              Download CV
            </button>
          </a>
        </div>
        <div className="lab">
          <img src={lab} alt="" />
        </div> 
    
        
      </div>
      <Slider/>
    </div>
  );
};

export default Hero;
