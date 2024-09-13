import "./Hero.css";
import bc from "../../assets/img/hero-dark.png";
import bcdark from "../../assets/img/hero-light.png";
import lab from "../../assets/img/LABNEW.png";
import { useContext } from "react";
import { ThemeContext } from "../../../Contexts/theme";

const Hero = ({ title, text1, text2, text3 }) => {
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
        <div className="text-hero">
          <h1 style={{ color: theme.color }}>{title}</h1>
          <p style={{ color: theme.color }}>{text1}</p>
          <p style={{ color: theme.color }}>{text2}</p>
          <p style={{ color: theme.color }}>{text3}</p>
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
    </div>
  );
};

export default Hero;
